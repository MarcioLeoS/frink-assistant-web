<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BotConfig extends Model
{
    // Si la tabla se llama exactamente 'bot_config'
    protected $table = 'bot_config';

    // Laravel maneja automáticamente created_at y updated_at
    protected $fillable = [
        'long_prompt',
        'short_prompt',
        'bot_type',
        'bot_name',
        'bot_description',
    ];
}
