<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Recommendation extends Model
{
    protected $table = 'recommendation';
    protected $fillable = [
        'recommendation_text',
        'recommendation_type',
        'customer_id',
    ];

    protected $casts = [
        'created_at' => 'datetime',
    ];

    // Relación

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }
}
