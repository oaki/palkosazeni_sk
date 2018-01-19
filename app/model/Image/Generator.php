<?php

namespace App\Model\Image;

use Tracy\Debugger;

class Generator extends \Nette\Object
{

    private $uploadDir;

    private $tempDir;

    private $tempUrl;

    private $importDir;

    private $hash;

    const __SEPARATOR__ = '|';

    function __construct($params)
    {
        $this->setTempUrl($params['tempUrl']);
        $this->setUploadDir($params['uploadDir']);
        $this->setTempDir($params['tempDir']);
        $this->setHash($params['hash']);
    }

    public function getThumbUrl($type, $src, $ext, $width, $height, $flags = 0)
    {
        return $this->getTempUrl() . '/' . $this->getFile($type, $src, $ext, $width, $height, $flags);
    }

    public function getThumbFile($type, $src, $ext, $width, $height, $flags = 0)
    {

        return $this->getTempDir() . '/' . $this->getFile($type, $src, $ext, $width, $height, $flags);
    }

    private function getFile($type, $src, $ext, $width, $height, $flags = 0)
    {
        $crypt = $this->getCrypt();

        $ext = ($ext == null) ? 'jpg' : $ext;

        return $src
            . self::__SEPARATOR__
            . $crypt->encrypt($type .
                self::__SEPARATOR__ . $width .
                self::__SEPARATOR__ . $height .
                self::__SEPARATOR__ . $flags
            )
            . '.' . $ext;
    }

    public function decryptThumbFileName($fileName)
    {

        $crypt = $this->getCrypt();

        list ($src, $hash) = explode(self::__SEPARATOR__, $fileName, 2);
        list ($hash, $ext) = explode(".", $hash, 2);

        $params = explode(self::__SEPARATOR__, $crypt->decrypt($hash));
        if (count($params) === 4) {
            list ($type, $width, $height, $flags) = explode(self::__SEPARATOR__, $crypt->decrypt($hash));
        } else {
            $type = '';
            list ($width, $height, $flags) = explode(self::__SEPARATOR__, $crypt->decrypt($hash));
        }

        if (strlen($ext) > 5 or strstr($src, '/') or !is_numeric($width) or !is_numeric($width) or !is_numeric($height) or !is_numeric($flags) or $flags > 9) {
            throw new \Exception ('Nastala chyba - nespravny subor.');
        }

        switch ($type) {
            default:
                $file = $this->getUploadDir() . '/' . $src . '.' . $ext;
                break;
        }

        return [
            'file'   => $file,
            'src'    => $src,
            'type'   => $type,
            'ext'    => $ext,
            'width'  => $width,
            'height' => $height,
            'flags'  => $flags
        ];
    }

    private function getCrypt()
    {
        $crypt       = new \Crypt ();
        $crypt->Mode = \Crypt::MODE_HEX;
        $crypt->Key  = $this->getHash();

        return $crypt;
    }

    /**
     * @return mixed
     */
    public function getTempUrl()
    {
        return $this->tempUrl;
    }

    /**
     * @param mixed $tempUrl
     */
    public function setTempUrl($tempUrl)
    {
        $this->tempUrl = $tempUrl;
    }

    /**
     * @return mixed
     */
    public function getHash()
    {
        return $this->hash;
    }

    /**
     * @param mixed $hash
     */
    public function setHash($hash)
    {
        $this->hash = $hash;
    }

    /**
     * @return mixed
     */
    public function getUploadDir()
    {
        return $this->uploadDir;
    }

    /**
     * @param mixed $uploadDir
     */
    public function setUploadDir($uploadDir)
    {
        $this->uploadDir = $uploadDir;
    }

    /**
     * @return mixed
     */
    public function getTempDir()
    {
        return $this->tempDir;
    }

    /**
     * @param mixed $tempDir
     */
    public function setTempDir($tempDir)
    {
        $this->tempDir = $tempDir;
    }

    public function getFileNameAndExtension($fileName)
    {
        Debugger::barDump('getFileNameAndExtension');
        Debugger::barDump($fileName);
        $info = pathinfo($fileName);

        return ['src' => $info['filename'], 'ext' => $info['extension']];
    }

    /**
     * @return mixed
     */
    public function getImportDir()
    {
        return $this->importDir;
    }

    /**
     * @param mixed $importDir
     */
    public function setImportDir($importDir)
    {
        $this->importDir = $importDir;
    }

}