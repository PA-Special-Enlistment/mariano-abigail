<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SalesModel extends Model
{
    protected $table = 'sales';
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $fillable =[
        'customer_id',
        'payment_method',
        'total',
    ];
}
