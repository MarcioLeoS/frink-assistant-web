<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Reminder extends Model
{
    protected $table = 'reminder';
    protected $fillable = [
        'content',
        'remind_at',
        'notified',
        'source',
        'customer_id',
    ];

    protected $casts = [
        'remind_at'  => 'datetime',
        'notified'   => 'boolean',
        'created_at' => 'datetime',
    ];

    // Relación

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }
}
