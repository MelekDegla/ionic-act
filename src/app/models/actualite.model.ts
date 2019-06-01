export class Actualite {
    id: string;
    titre: string;
    description: string;
    date: Date;
    image: string;

    constructor( id: string, titre: string, description: string, image: string) {
        this.id = id;
        this.titre = titre;
        this.description = description;
        this.date = new Date();
        this.image = image;
    }
}
