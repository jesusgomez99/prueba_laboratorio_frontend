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
        Schema::create('informe_imagen', function (Blueprint $table) {
            $table->id();
            $table->foreignId('informe_id')->constrained()->onDelete('cascade');  // Relación con Informes
            $table->foreignId('imagen_id')->constrained()->onDelete('cascade');  // Relación con Imágenes
            $table->foreignId('aumento_id')->constrained()->onDelete('cascade');  // Relación con Aumentos
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('informe_imagen');
    }
};
