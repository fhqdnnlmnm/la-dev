<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
//auth新增的路由开始
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/pricecheck','PriceCheck\PriceController@index');
