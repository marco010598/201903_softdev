<?php

use Illuminate\Database\Seeder;

class LocationTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('locations')->truncate();
        $location = [
            [
                'name' => '7th of may taytay rizal',
                'BU' => 'PHAM14',
                'OU' => 'P4',
            ],
            [
                'name' => '7th of may taytay rizal2nd',
                'BU' => 'PHAM14',
                'OU' => 'P4',
            ],
            [
                'name' => 'Luisa 3rd flr',
                'BU' => 'PHAM14',
                'OU' => 'P4',
            ],
            [
                'name' => 'Luisa 4th flr',
                'BU' => 'PHAM14',
                'OU' => 'P4',
            ],
            [
                'name' => 'taytay',
                'BU' => 'PHAM14',
                'OU' => 'P4',
            ],
            [
                'name' => 'rizal',
                'BU' => 'PHAM14',
                'OU' => 'P4',
            ],
            [
                'name' => 'laguna',
                'BU' => 'PHAM14',
                'OU' => 'P4',
            ],
            [
                'name' => 'pacita',
                'BU' => 'PHAM14',
                'OU' => 'P4',
            ],
            [
                'name' => 'Front Storage',
                'BU' => 'PHAM14',
                'OU' => 'P4',
            ],
            [
                'name' => 'Back Storage',
                'BU' => 'PHAM14',
                'OU' => 'P4',
            ]

        ];
        DB::table('locations')->insert($location);
    }
}
