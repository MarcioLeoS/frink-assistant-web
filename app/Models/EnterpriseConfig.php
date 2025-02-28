<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EnterpriseConfig extends Model
{
    protected $table = 'enterprise_config';

    protected $fillable = [
        'enterprise_name',
        'enterprise_description',
    ];
}
