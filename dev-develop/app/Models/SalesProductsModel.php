<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SalesProductsModel extends Model
{
    protected $table = 'sales_products';
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $fillable =[
        'sales_id',
        'product_id',
    ];
}
