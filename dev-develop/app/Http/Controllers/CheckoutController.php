<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SalesModel;
use App\Models\SalesProductsModel;
use App\Models\CustomerModel;
use App\Models\ProductsModel;
use App\Models\ProductImagesModel;
use Illuminate\Support\Facades\DB;

class CheckoutController extends Controller
{
    public function store(Request $request){

        $sales = new SalesModel;
        $sales->customer_id = $request->customer_id;
        $sales->payment_method = $request->payment_method;
        $sales->total = $request->total;
        $sales->save();

        $sales_id = SalesModel::select('id', 'created_date')->whereRaw('id = (select max(`id`) from sales)')->first();
        // $created_date = SalesModel::select('id')->whereRaw('id = (select max(`id`) from sales)')->first();
        // $sales_id = $sales_id->id;

        // $counter = count()
        foreach($request->products as $product){
            // echo($request->products); exit;
            
            for($i = 0; $i < $product['qty']; $i++){
                $sales_product = new SalesProductsModel;
                $sales_product->product_id = $product['product_id'];
                $sales_product->sales_id =  $sales_id->id;
                $sales_product->save();
            }
        }

        $customer = CustomerModel::findOrFail($request->customer_id);
        $product_details = SalesProductsModel::
        select('brands.name as brand', 'products.name as product_name', 'price', DB::raw('count(*) as qty'),
         DB::raw('(select image_url from product_images where product_id = sales_products.product_id limit 1) as image_url'))
        ->join('products', 'sales_products.product_id', '=', 'products.id')
        ->join('brands', 'products.brand_id', '=', 'brands.id')
        // ->leftJoin('product_images', 'sales_products.product_id', '=', 'product_images.product_id')
        ->where('sales_products.sales_id', $sales_id->id)
        ->groupBy('sales_products.product_id')
        ->get();

        $data = array(
            'customer' => $customer,
            'sales_products' => $product_details,
            'sales_id' => $sales_id->id,
            'created_date' => $sales_id->created_date,
            'payment_method' => $request->payment_method,
        );
        return $data;
    }
}
