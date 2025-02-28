<?php

namespace App\Http\Controllers\App;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

use App\Models\Customer;
use App\Models\Conversation;

class CustomersController extends Controller
{
    public function getData(Request $request)
    {
        $customers = Customer::all();

        $customersQuantity = count($customers);

        return response()->json(['total' => $customersQuantity, 'customers' => $customers]);
    }

    public function getConversationsData(Request $request)
    {
        $customers = Conversation::with('customer', 'chatContexts')->get();

        $customersQuantity = count($customers);

        return response()->json(['total' => $customersQuantity, 'customers' => $customers]);
    }

    public function getConversationEspecificData(Request $request, $id)
    {
        $conversation = Conversation::with('customer', 'chatContexts')->findOrFail($id);

        return Inertia::render('app/conversations/conversation/messages', [
            'conversation' => $conversation,
            'totalMessages' => count($conversation->chatContexts),
        ]);
    }
}
