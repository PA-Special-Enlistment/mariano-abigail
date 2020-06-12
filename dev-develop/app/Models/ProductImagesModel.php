<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductImagesModel extends Model
{
    protected $table = 'product_images';
    protected $primaryKey = 'id';
    public $timestamps = false;
}
