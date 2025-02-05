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
        Schema::create('informes', function (Blueprint $table) {
            $table->id();
            $table->text('numero_muestra');
            $table->foreignId('naturaleza_id')->constrained()->onDelete('cascade');  // Relación con Naturalezas
            $table->foreignId('conservacion_id')->constrained()->onDelete('cascade');  // Relación con Conservaciones
            $table->foreignId('ciudad_id')->constrained()->onDelete('cascade');  // Relación con Ciudades
            $table->foreignId('biopsia_id')->constrained()->onDelete('cascade');  // Relación con Biopsias
            $table->foreignId('calidad_id')->constrained()->onDelete('cascade');  // Relación con Calidades
            $table->text('descripcion_calidad');  // Descripción de la calidad
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('informes');
    }
};
