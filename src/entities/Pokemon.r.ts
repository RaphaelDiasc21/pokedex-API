class Pokemon{
    
    private _name: string
    private _url: string;
    private _image: string;
    
    constructor(){

    }

    public get name(): string{
        return this._name;
    }

    public set name(name: string){
        this._name = name;
    }

    public get url(): string{
        return this._url;
    }

    public set url(url: string){
        this._url = url;
    }

    public get image(): string{
        return this._image;
    }

    public set image(image: string){
        this._image = image;
    }
}