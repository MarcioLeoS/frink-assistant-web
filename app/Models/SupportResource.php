<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SupportResource extends Model
{
    protected $table = 'support_resource';
    protected $fillable = [
        'title',
        'description',
        'resource_type', // corresponde a resourceType
        'url',
        'problem_type',  // corresponde a problemType
    ];

    protected $casts = [
        'created_at' => 'datetime',
    ];
}
