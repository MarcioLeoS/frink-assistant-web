<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CustomerPersonalization extends Model
{
    protected $table = 'customer_personalization';
    protected $fillable = [
        'enabled',
        'tone',
        'interests',
        'additional_info',
        'customer_id',
    ];

    protected $casts = [
        'enabled' => 'boolean',
    ];

    // Relación uno a uno (la personalización pertenece a un Customer)
    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }
}
