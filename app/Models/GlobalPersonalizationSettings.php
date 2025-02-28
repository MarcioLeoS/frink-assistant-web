<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GlobalPersonalizationSettings extends Model
{
    protected $table = 'global_personalization_settings';

    protected $fillable = [
        'personalization_enabled',
    ];

    protected $casts = [
        'personalization_enabled' => 'boolean',
    ];

    // No se manejan timestamps para este modelo
    public $timestamps = false;
}
