<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('informe_codigo', function (Blueprint $table) {
            $table->id();
            $table->foreignId('informe_id')->constrained()->onDelete('cascade');  // Relación con Informes
            $table->foreignId('codigo_id')->constrained()->onDelete('cascade');  // Relación con Códigos
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('informe_codigo');
    }
};
