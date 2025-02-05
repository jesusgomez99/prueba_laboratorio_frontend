<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!--inertia.js actualiza dinamicamente el título cuando cambias de página-->
        <!--Obtiene el nombre de la aplicación desde el archivo config/app.php, si no está definido usará Laravel-->
        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!--Optimiza la conexión previa al servidor de Bunny Fonts-->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <!--Carga la fuente Figtree con los pesos 400, 500 y 600-->
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        <!--Genera automáticamente las rutas de Laravel para que puedan ser utilizadas en el frontend-->
        @routes

        <!--Habilita recarga en caliente para Reacct durante el desarrollo-->
        @viteReactRefresh
        <!--Carga los archivos de JavaScript necesarios para la aplicación-->
        @vite([
        //Ardchivo principal de React
        'resources/js/app.jsx', 
        //Carga dinámicamente el componente React correspondiente a la página actual
        "resources/js/Pages/{$page['component']}.jsx"
        ])

        <!--Inserta los metadatos necesario para que inertia administre el encabezado de la página-->
        @inertiaHead

    </head>
    <!---->
    <body class="font-sans antialiased">
        <!--Renderiza el contenido de la página actual utilizando inertia.js, este contenido es dinámico y depende el componente React que esté cargando-->
        @inertia
    </body>
</html>
