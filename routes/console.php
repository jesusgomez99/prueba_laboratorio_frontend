<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;

//Define un comando artisan 
//Cuando se ejecuta php artisan inspire en terminal, se ejecuta la función anónima que contiene el código del comando
Artisan::command('inspire', function () {
    //Muestra una cita motivacional en la consola. La cita se obtiene llamando al método Inspiring::quote()
    $this->comment(Inspiring::quote());
    //Define una descripción para el comando. Esta descripción aparece cuando ejecutas php artisan list para ver los comandos disponibles
})->purpose('Display an inspiring quote');
