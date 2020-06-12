<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CustomerModel;
class LoginController extends Controller
{
    public function login($username, $password){

        $customer = CustomerModel::where('username', $username)->where('password', $password)->first();

        $successData = array(
            'customer' => $customer,
            'result' => true,
            'status_code' => 200,
            'message' => 'You have been logged in successfully.'
        );

        $failedData = array(
            'customer' => $customer,
            'result' => false,
            'status_code' => 200,
            'message' => 'Username and password are invalid.'
        );
        

        if($customer){
            return $successData;
        }

        else {
            return $failedData;
        }
    }
}
