<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('analitycs', function () {
        return Inertia::render('app/analytics/analytics');
    })->name('analytics');

    Route::get('kpi', function () {
        return Inertia::render('app/kpi/kpi');
    })->name('kpi');

    Route::get('conversations', function () {
        return Inertia::render('app/conversations/conversations');
    })->name('conversations');

    Route::get('tickets', function () {
        return Inertia::render('app/tickets/tickets');
    })->name('tickets');

    Route::get('reminders', function () {
        return Inertia::render('app/reminders/reminders');
    })->name('reminders');

    Route::get('trackings', function () {
        return Inertia::render('app/trackings/trackings');
    })->name('trackings');

    Route::get('alerts', function () {
        return Inertia::render('app/alerts/alerts');
    })->name('alerts');

    Route::get('bot', function () {
        return Inertia::render('app/bot/bot');
    })->name('bot');

    Route::get('integrations', function () {
        return Inertia::render('app/integrations/integrations');
    })->name('integrations');

    Route::get('config', function () {
        return Inertia::render('app/config/config');
    })->name('config');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';

//App routes
require __DIR__ . '/customers.php';
