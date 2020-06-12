<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductSpecsModel extends Model
{
    protected $table = 'product_specs';
    protected $primaryKey = 'id';
    public $timestamps = false;
}
