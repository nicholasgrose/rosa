import AlbumCardProps from './AlbumCardProps';
import PortraitAlbumPicture from './images/portraits/meghan_and_greg.jpg';
import StructuresAlbumPicture from './images/structures/neuschwanstein.jpg';
import LandscapesAlbumPicture from './images/landscapes/lost_mines_trail_big_bend.jpg';
import MacroAlbumPicture from './images/macro/cicada.jpg';
import AstroAlbumPicture from './images/astro/comet_NEOWISE.jpg';

const GalleryList: Array<AlbumCardProps> = [
    {
        albumName: 'Portraits',
        thumbnailPath: PortraitAlbumPicture,
        albumPath: './images/portraits/',
    },
    {
        albumName: 'Structures',
        thumbnailPath: StructuresAlbumPicture,
        albumPath: './images/portraits/',
    },
    {
        albumName: 'Landscapes',
        thumbnailPath: LandscapesAlbumPicture,
        albumPath: './images/portraits/',
    },
    {
        albumName: 'Macro Photography',
        thumbnailPath: MacroAlbumPicture,
        albumPath: './images/portraits/',
    },
    {
        albumName: 'Astrophotography',
        thumbnailPath: AstroAlbumPicture,
        albumPath: './images/portraits/',
    },
];

export default GalleryList;
