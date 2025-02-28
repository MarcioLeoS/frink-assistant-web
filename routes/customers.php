<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\App\CustomersController;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/conversations/getData', [CustomersController::class, 'getConversationsData']);
    Route::get('/conversations/conversation/{id}', [CustomersController::class, 'getConversationEspecificData']);

});

