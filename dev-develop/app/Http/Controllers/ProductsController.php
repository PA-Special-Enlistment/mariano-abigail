<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ProductsModel;
use App\Models\ProductImagesModel;
use App\Models\ProductSpecsModel;



class ProductsController extends Controller
{
    public function index(){
        $products = ProductsModel::select('products.id', 'products.name as product_name',  'brands.name as brand', 'category', 'price', 'products.description', 'products.short_desc', 'image_url')
        ->join('brands', 'products.brand_id', '=', 'brands.id')
        ->leftJoin('product_images', 'products.id', '=', 'product_images.product_id')
        ->groupBy('products.id')
        ->get();

        return $products;
    }

    public function show($id){
        $product = ProductsModel::findOrFail($id);
        $images = ProductImagesModel::select('image_url')->where('product_id', $id)->get();
        $specs = ProductSpecsModel::select('specs')->where('product_id', $id)->get();

        // echo($product); exit;
        $data = array(
            'product' => $product,
            'images' => $images,
            'specs' => $specs,
        );
        // print_r($data); exit;
        return compact('data', $data);
    }
    public function filter($id){
        $products = ProductsModel::select('products.id', 'products.name as product_name',  'brands.name as brand', 'category', 'price', 'products.description', 'products.short_desc', 'image_url')
        ->join('brands', 'products.brand_id', '=', 'brands.id')
        ->leftJoin('product_images', 'products.id', '=', 'product_images.product_id')
        ->where('brands.id', $id)
        ->groupBy('products.id')
        ->get();

        return $products;
    }
}
