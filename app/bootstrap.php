<?php

require __DIR__ . '/../vendor/autoload.php';

$configurator = new Nette\Configurator;

$configurator->setDebugMode('151.236.225.108'); // enable for your remote IP



$configurator->enableTracy(__DIR__ . '/../log');

$configurator->setTimeZone('Europe/Prague');
$configurator->setTempDirectory(__DIR__ . '/../temp');
$configurator->addParameters(['baseUri' => dirname(__FILE__)]);

$configurator->createRobotLoader()
    ->addDirectory(__DIR__)
    ->register();

$configurator->addConfig(__DIR__ . '/config/config.neon');
//$configurator->addConfig(__DIR__ . '/config/config.local.neon');

$container = $configurator->createContainer();

return $container;
