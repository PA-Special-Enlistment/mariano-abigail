<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('Products', 'ProductsController@index');
Route::get('Product/{id}', 'ProductsController@show');
Route::get('Login/{username}/{password}', 'LoginController@login');
Route::post('Signup', 'LoginController@signup');

Route::post('Checkout', 'CheckoutController@store');