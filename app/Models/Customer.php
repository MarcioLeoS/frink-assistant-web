<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $table = 'customer';
    protected $fillable = [
        'name',
        'email',
        'phone_number',
    ];

    // Relaciones

    public function chats()
    {
        return $this->hasMany(ChatContext::class);
    }

    public function tickets()
    {
        return $this->hasMany(Ticket::class);
    }

    public function reminders()
    {
        return $this->hasMany(Reminder::class);
    }

    public function followUps()
    {
        return $this->hasMany(FollowUp::class);
    }

    public function recommendations()
    {
        return $this->hasMany(Recommendation::class);
    }

    public function personalization()
    {
        return $this->hasOne(CustomerPersonalization::class);
    }

    public function conversations()
    {
        return $this->hasMany(Conversation::class);
    }

    public function ticketMarketings()
    {
        return $this->hasMany(TicketMarketing::class);
    }
}
