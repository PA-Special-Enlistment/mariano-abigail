<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CustomerModel extends Model
{
    protected $table = 'customers';
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $fillable =[
        'first_name',
        'last_name',
        'email',
        'username',
        'password',
        'address',
        'city',
        'province',
        'country',
        'phone'
    ];
}
