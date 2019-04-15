<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if(!Schema::hasTable('products', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('quantity');
            $table->string('serial')->nullable();
            $table->integer('status_id')->nullable();

            $table->integer('brand_id')->nullable()->unsigned()->default(1);

            $table->integer('manufacture_id')->nullable()->unsigned();

            $table->integer('category_id')->nullable()->unsigned();

            $table->integer('description_id')->nullable()->unsigned();

            $table->integer('location_id')->nullable()->unsigned();
            $table->timestamps();
        }));
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
