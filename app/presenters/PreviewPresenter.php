<?php
namespace App\Presenters;

use Nette,
    Nette\Utils\Image,
    App\Model;
use Tracy\Debugger;

class PreviewPresenter extends Nette\Application\UI\Presenter
{

    function actionDefault($fileName)
    {

        $imageGenerator = $this->context->getService('ImageGenerator');
        $params = $imageGenerator->decryptThumbFileName($fileName);

        try {
            $image = Image::fromFile($params['file']);
        } catch (Nette\Utils\UnknownImageFileException $e) {
            // check if extension is webp
            if ($params['ext'] === 'webp') {
                $image = Image::fromFile(str_replace('.webp', '.jpg', $params['file']));
            } else {
                throw $e;
            }
        }


        //progressive
        $image->interlace(true);

        if ($params['flags'] != 6) {
            $image->resize($params['width'], $params['height'], $params['flags']);
        }


        if ($params['flags'] == 5) {
            $image->crop("50%", "50%", $params['width'], $params['height']);
        }

        if ($params['flags'] == 6) {
            $image->resize($params['width'], $params['height'], 1);
            $i_height = $image->getHeight();
            $i_width = $image->getWidth();
            $position_top = (int)(($params['height'] - $i_height) / 2);
            $position_left = (int)(($params['width'] - $i_width) / 2);
            $color = array('red' => 255, 'green' => 255, 'blue' => 255);
            $blank = Image::fromBlank($params['width'], $params['height'], $color);
            $blank->place($image, $position_left, $position_top);
            $image = $blank;
        }

        if ($params['ext'] === 'webp') {
            $image->save($imageGenerator->getThumbFile($params['type'], $params['src'], $params['ext'], $params['width'], $params['height'], $params['flags']),
                82,
                Image::WEBP);
            $image->send(Image::WEBP, $quality = 82);
        } else {
            $image->save($imageGenerator->getThumbFile($params['type'], $params['src'], $params['ext'], $params['width'], $params['height'], $params['flags']));
            $image->send(Image::JPEG, $quality = 100);
        }


        exit;
    }
}