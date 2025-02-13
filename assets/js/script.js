'use strict';
const musicData = [
  {
    backgroundImage: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/Cover%2FKejora.jpg?alt=media&token=2f845185-3496-46c5-8ba5-f1dd6732070d",
    posterUrl: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/Cover%2FKejora.jpg?alt=media&token=2f845185-3496-46c5-8ba5-f1dd6732070d",
    title: "Kejora",
    album: "Kejora",
    year: 2014,
    artist: "Lesti Kejora",
    musicPath: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/music%2FKejora.mp3?alt=media&token=c1719d8f-08d8-4b93-b483-b554bd50cb51",
  },
  {
    backgroundImage: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/Cover%2FZapin%20Melayu.jpg?alt=media&token=42bfd56a-8470-4b7d-a57c-b661cfc03f6f",
    posterUrl: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/Cover%2FZapin%20Melayu.jpg?alt=media&token=42bfd56a-8470-4b7d-a57c-b661cfc03f6f",
    title: "Zapin Melayu",
    album: "Zapin Melayu",
    year: 2016,
    artist: "Lesti Kejora",
    musicPath: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/music%2FZapin%20Melayu.mp3?alt=media&token=db9ca2c4-b494-4b14-b988-7aca2a29bef0",
  },
  {
    backgroundImage: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/Cover%2FEgois.jpg?alt=media&token=82776c03-8e99-4ea6-912e-09141ade3fd7",
    posterUrl: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/Cover%2FEgois.jpg?alt=media&token=82776c03-8e99-4ea6-912e-09141ade3fd7",
    title: "Egois",
    album: "Egois",
    year: 2016,
    artist: "Lesti Kejora",
    musicPath: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/music%2FEgois.mp3?alt=media&token=7c987b5e-a2bd-44bd-b8d8-1564160e3c44",
  },
  {
    backgroundImage: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/Cover%2FBuka%20Mata%20Hati.jpg?alt=media&token=486b240c-bb96-4a56-b513-9ba761fdd453",
    posterUrl: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/Cover%2FBuka%20Mata%20Hati.jpg?alt=media&token=486b240c-bb96-4a56-b513-9ba761fdd453",
    title: "Buka Mata Hati",
    album: "Buka Mata Hati",
    year: 2017,
    artist: "Lesti Kejora",
    musicPath: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/music%2FBuka%20Mata%20Hati.mp3?alt=media&token=68ca8046-4dc2-4b01-b758-4d117ef78337",
  },
  {
    backgroundImage: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/Cover%2FMati%20Gaya.jpg?alt=media&token=9e585a6a-ae05-48ac-a125-61ae26518730",
    posterUrl: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/Cover%2FMati%20Gaya.jpg?alt=media&token=9e585a6a-ae05-48ac-a125-61ae26518730",
    title: "Mati Gaya",
    album: "Mati Gaya",
    year: 2017,
    artist: "Lesti Kejora",
    musicPath: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/music%2FMati%20Gaya.mp3?alt=media&token=db6f5962-e21c-4ad8-9ca0-ccf745d654f9",
  },
  {
    backgroundImage: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/Cover%2FPurnama.jpg?alt=media&token=f3be294f-dbbf-4a59-9de2-ffb9c6bbc052",
    posterUrl: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/Cover%2FPurnama.jpg?alt=media&token=f3be294f-dbbf-4a59-9de2-ffb9c6bbc052",
    title: "Purnama",
    album: "Purnama",
    year: 2018,
    artist: "Lesti Kejora",
    musicPath: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/music%2FPurnama.mp3?alt=media&token=6a981c8d-0147-4c65-b7a8-38f0b09dcb46",
  },
  {
    backgroundImage: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/Cover%2FLebih%20Dari%20Selamanya.jpg?alt=media&token=bbc4681d-c825-4ae6-a744-29e447dfd519",
    posterUrl: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/Cover%2FLebih%20Dari%20Selamanya.jpg?alt=media&token=bbc4681d-c825-4ae6-a744-29e447dfd519",
    title: "Lebih Dari Selamanya",
    album: "Lebih Dari Selamanya",
    year: 2018,
    artist: "Lesti Kejora",
    musicPath: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/music%2FLebih%20Dari%20Selamanya.mp3?alt=media&token=bae001f8-3794-403d-9cb5-b2e9f361e4ae",
  },
  {
    backgroundImage: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/Cover%2FAda%20Cerita.jpg?alt=media&token=f2e34612-0491-4b46-914e-a35e608fae6c",
    posterUrl: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/Cover%2FAda%20Cerita.jpg?alt=media&token=f2e34612-0491-4b46-914e-a35e608fae6c",
    title: "Ada Cerita",
    album: "Ada Cerita",
    year: 2019,
    artist: "Lesti Kejora",
    musicPath: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/music%2FAda%20Cerita.mp3?alt=media&token=0990eb07-75f0-4392-af31-425945ded531",
  },
  {
    backgroundImage: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/Cover%2FTirani.jpg?alt=media&token=65c645b4-e613-4ae0-af30-51bf34378c0d",
    posterUrl: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/Cover%2FTirani.jpg?alt=media&token=65c645b4-e613-4ae0-af30-51bf34378c0d",
    title: "Tirani",
    album: "Tirani",
    year: 2020,
    artist: "Lesti Kejora",
    musicPath: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/music%2FTirani.mp3?alt=media&token=29a7cbd7-af8a-47a8-b366-e8693fe443d7",
  },
  {
    backgroundImage: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/Cover%2FKulepas%20Dengan%20Ikhlas.jpg?alt=media&token=3a55e18a-8d4d-4b50-bdf6-9c9dba5136d4",
    posterUrl: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/Cover%2FKulepas%20Dengan%20Ikhlas.jpg?alt=media&token=3a55e18a-8d4d-4b50-bdf6-9c9dba5136d4",
    title: "Kulepas Dengan Ikhlas",
    album: "Kulepas Dengan Ikhlas",
    year: 2020,
    artist: "Lesti Kejora",
    musicPath: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/music%2FKulepas%20Dengan%20Ikhlas.mp3?alt=media&token=88d39d32-98a7-45b1-b5ba-5deefb53c651",
  },
  {
    backgroundImage: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/Cover%2FSaat%20Terakhir.jpg?alt=media&token=546e3d3a-98b7-44d7-8631-acd5d9d058f7",
    posterUrl: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/Cover%2FSaat%20Terakhir.jpg?alt=media&token=546e3d3a-98b7-44d7-8631-acd5d9d058f7",
    title: "Saat Terakhir",
    album: "Saat Terakhir",
    year: 2021,
    artist: "Lesti Kejora",
    musicPath: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/music%2FSaat%20Terakhir.mp3?alt=media&token=f3a9509d-e4e8-4839-9a49-8795febcc231",
  },
  {
    backgroundImage: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/Cover%2FBismillah%20Cinta.jpg?alt=media&token=f2ad4396-f8a9-4050-9027-ba982cffae3e",
    posterUrl: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/Cover%2FBismillah%20Cinta.jpg?alt=media&token=f2ad4396-f8a9-4050-9027-ba982cffae3e",
    title: "Bismillah Cinta",
    album: "Bismillah Cinta",
    year: 2021,
    artist: "Lesti Kejora, Ungu",
    musicPath: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/music%2FBismillah%20Cinta.mp3?alt=media&token=9a60031d-5d44-4011-9555-a3dfbd341db1",
  },
  {
    backgroundImage: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/Cover%2FBawa%20Aku%20Ke%20Penghulu.jpg?alt=media&token=b54c5a33-1719-45f9-b1a7-6fb9be97da44",
    posterUrl: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/Cover%2FBawa%20Aku%20Ke%20Penghulu.jpg?alt=media&token=b54c5a33-1719-45f9-b1a7-6fb9be97da44",
    title: "Bawa Aku Ke Penghulu",
    album: "Bawa Aku Ke Penghulu",
    year: 2021,
    artist: "Lesti Kejora",
    musicPath: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/music%2FBawa%20Aku%20Ke%20Penghulu.mp3?alt=media&token=e9ad86fd-694f-4e82-8ab6-7f73b09b7591",
  },
  {
    backgroundImage: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/Cover%2FTakdir%20Cinta.jpg?alt=media&token=1611b634-c621-4f65-b7e8-ca5adfae05ba",
    posterUrl: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/Cover%2FTakdir%20Cinta.jpg?alt=media&token=1611b634-c621-4f65-b7e8-ca5adfae05ba",
    title: "Takdir Cinta",
    album: "Takdir Cinta",
    year: 2021,
    artist: "Lesti Kejora, Rizky Billar",
    musicPath: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/music%2FTakdir%20Cinta.mp3?alt=media&token=8372795f-f740-496f-918f-b525cafced90",
  },
  {
    backgroundImage: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/Cover%2FLentera.jpg?alt=media&token=7415ab7d-bb67-42c2-b447-4db4eda5cf37",
    posterUrl: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/Cover%2FLentera.jpg?alt=media&token=7415ab7d-bb67-42c2-b447-4db4eda5cf37",
    title: "Lentera",
    album: "Lentera",
    year: 2022,
    artist: "Lesti Kejora",
    musicPath: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/music%2FLentera.mp3?alt=media&token=4594627e-53ae-49e0-9805-81a24c1d7b5c",
  },
  {
    backgroundImage: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/Cover%2FSekali%20Seumur%20Hidup.jpg?alt=media&token=5759a47d-222c-4f42-ab0e-0540ecae9fc3",
    posterUrl: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/Cover%2FSekali%20Seumur%20Hidup.jpg?alt=media&token=5759a47d-222c-4f42-ab0e-0540ecae9fc3",
    title: "Sekali Seumur Hidup",
    album: "Sekali Seumur Hidup",
    year: 2022,
    artist: "Lesti Kejora",
    musicPath: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/music%2FSekali%20Seumur%20Hidup.mp3?alt=media&token=fe03be9a-da56-45e3-b229-e3df07bc3a4c",
  },
  {
    backgroundImage: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/Cover%2FInsan%20Biasa.jpg?alt=media&token=840300cc-a1c8-45e9-a20f-f0d8d71331de",
    posterUrl: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/Cover%2FInsan%20Biasa.jpg?alt=media&token=840300cc-a1c8-45e9-a20f-f0d8d71331de",
    title: "Insan Biasa",
    album: "Insan Biasa",
    year: 2023,
    artist: "Lesti Kejora",
    musicPath: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/music%2FInsan%20Biasa.mp3?alt=media&token=58339381-a7bc-459c-a065-02ee7b4433f3",
  },
  {
    backgroundImage: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/Cover%2FDi%20Arsy-Mu.jpg?alt=media&token=58828dfd-414d-4816-9ec6-dfacd4196ab5",
    posterUrl: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/Cover%2FDi%20Arsy-Mu.jpg?alt=media&token=58828dfd-414d-4816-9ec6-dfacd4196ab5",
    title: "DiArsy-Mu",
    album: "DiArsy-Mu",
    year: 2023,
    artist: "Lesti Kejora",
    musicPath: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/music%2FDi%20Arsy-Mu.mp3?alt=media&token=c424993e-e5a7-4a3f-842d-239ea7326023",
  },
  {
    backgroundImage: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/Cover%2FBukan%20Cinta%20Biasa.jpg?alt=media&token=abd6bb01-083f-4acf-b541-cf8e91fc039d",
    posterUrl: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/Cover%2FBukan%20Cinta%20Biasa.jpg?alt=media&token=abd6bb01-083f-4acf-b541-cf8e91fc039d",
    title: "Bukan Cinta Biasa",
    album: "Bukan Cinta Biasa",
    year: 2023,
    artist: "Lesti Kejora",
    musicPath: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/music%2FBukan%20Cinta%20Biasa.mp3?alt=media&token=e870d6e3-16a1-4df4-bb4a-9248a31ad67c",
  },
  {
    backgroundImage: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/Cover%2FTerkesan.jpg?alt=media&token=a3364be9-f439-47c7-8f1f-f74636bdac7e",
    posterUrl: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/Cover%2FTerkesan.jpg?alt=media&token=a3364be9-f439-47c7-8f1f-f74636bdac7e",
    title: "Terkesan",
    album: "Terkesan",
    year: 2023,
    artist: "Lesti Kejora",
    musicPath: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/music%2FTerkesan.mp3?alt=media&token=34d402fd-4867-4bc8-9a51-88aa847925db",
  },
  {
    backgroundImage: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/Cover%2FMenyerah.jpg?alt=media&token=6f6757a0-c83d-42b9-89a3-8576bf784b09",
    posterUrl: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/Cover%2FMenyerah.jpg?alt=media&token=6f6757a0-c83d-42b9-89a3-8576bf784b09",
    title: "Menyerah",
    album: "Menyerah",
    year: 2023,
    artist: "Lesti Kejora, Mom Uung, Rizky Billar",
    musicPath: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/music%2FMenyerah.mp3?alt=media&token=555b7872-df34-449a-8bf4-d147c4bfb4d2",
  },
  {
    backgroundImage: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/Cover%2FAngin.jpg?alt=media&token=cccc5737-e91b-4049-ac84-b3971f900c9d",
    posterUrl: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/Cover%2FAngin.jpg?alt=media&token=cccc5737-e91b-4049-ac84-b3971f900c9d",
    title: "Angin",
    album: "Angin",
    year: 2024,
    artist: "Lesti Kejora",
    musicPath: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/music%2FAngin.mp3?alt=media&token=cb43b1f0-977d-45c1-9468-623c962ae201",
  },
  {
    backgroundImage: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/Cover%2FMencintaimu%20Karena%20Allah.jpg?alt=media&token=7da57b3d-9c74-45d2-b7ec-ac8c5305dc02",
    posterUrl: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/Cover%2FMencintaimu%20Karena%20Allah.jpg?alt=media&token=7da57b3d-9c74-45d2-b7ec-ac8c5305dc02",
    title: "Mencintaimu Karena Allah",
    album: "Mencintaimu Karena Allah",
    year: 2024,
    artist: "Lesti Kejora",
    musicPath: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/music%2FMencintaimu%20Karena%20Allah.mp3?alt=media&token=940da17c-958b-4bb8-8fa5-c402605de5fd",
  },
  {
    backgroundImage: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/Cover%2Fab67616d0000b27370e4c59b946415b711cc2186.jpeg?alt=media&token=34b344e4-fb9d-4e49-9f88-859722e680b0",
    posterUrl: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/Cover%2Fab67616d0000b27370e4c59b946415b711cc2186.jpeg?alt=media&token=34b344e4-fb9d-4e49-9f88-859722e680b0",
    title: "Bukan Karena Tak Cinta",
    album: "Bukan Karena Tak Cinta",
    year: 2024,
    artist: "Lesti Kejora, Judika",
    musicPath: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/music%2Fspotifydown.com%20-%20Bukan%20Karena%20Tak%20Cinta.mp3?alt=media&token=c5e6da3d-a1fb-48d5-90b0-0022e1587984",
  },
  {
    backgroundImage: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/Cover%2Fab67616d0000b273048e2860b572a210d407b59d.jpeg?alt=media&token=ecd1ed9c-617a-4973-915b-f11fcbbb0326",
    posterUrl: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/Cover%2Fab67616d0000b273048e2860b572a210d407b59d.jpeg?alt=media&token=ecd1ed9c-617a-4973-915b-f11fcbbb0326",
    title: "Bukan Karena Tak Cinta (Dangdut Version)",
    album: "Bukan Karena Tak Cinta (Dangdut Version)",
    year: 2024,
    artist: "Lesti Kejora, Judika",
    musicPath: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/music%2Fspotifydown.com%20-%20Bukan%20Karena%20Tak%20Cinta%20(Dangdut%20Version).mp3?alt=media&token=4c2c0b04-a1c8-4825-afb6-8dcf99dec59e",
  },
  {
    backgroundImage: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/Cover%2Fab67616d0000b2735e85a83ad1c06eb280b062df.jpeg?alt=media&token=23fd16b6-4386-4564-8feb-03607fb3c135",
    posterUrl: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/Cover%2Fab67616d0000b2735e85a83ad1c06eb280b062df.jpeg?alt=media&token=23fd16b6-4386-4564-8feb-03607fb3c135",
    title: "Udang Dibalik Batu",
    album: "Udang Dibalik Batu",
    year: 2024,
    artist: "Lesti Kejora, King Nassar, Ungu",
    musicPath: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/music%2Fspotifydown.com%20-%20Udang%20Di%20Balik%20Batu.mp3?alt=media&token=97d1a4b3-c8b5-436e-8751-c4a61f1791d3",
  },
  {
    backgroundImage: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/Cover%2FSatu%20Satunya%20Permaisurimu.jpg?alt=media&token=36d9c06d-8b53-401d-9416-2e02d9c3a574",
    posterUrl: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/Cover%2FSatu%20Satunya%20Permaisurimu.jpg?alt=media&token=36d9c06d-8b53-401d-9416-2e02d9c3a574",
    title: "Satu Satunya Permaisurimu",
    album: "Satu Satunya Permaisurimu",
    year: 2024,
    artist: "Lesti Kejora",
    musicPath: "https://firebasestorage.googleapis.com/v0/b/kejoramusic-a31db.appspot.com/o/music%2FSatu%20Satunya%20Permaisurimu.mp3?alt=media&token=c87275a3-78fb-4a2f-9b66-ec0c2a124e45",
  },
];

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}

const playlist = document.querySelector("[data-music-list]");

for (let i = 0, len = musicData.length; i < len; i++) {
  playlist.innerHTML += `
  <li>
    <button class="music-item ${i === 0 ? "playing" : ""}" data-playlist-toggler data-playlist-item="${i}">
      <img src="${musicData[i].posterUrl}" width="800" height="800" alt="${musicData[i].title} Album Poster"
        class="img-cover">

      <div class="item-icon">
        <span class="material-symbols-rounded">equalizer</span>
      </div>
    </button>
  </li>
  `;
}

const playlistSideModal = document.querySelector("[data-playlist]");
const playlistTogglers = document.querySelectorAll("[data-playlist-toggler]");
const overlay = document.querySelector("[data-overlay]");

const togglePlaylist = function () {
  playlistSideModal.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("modalActive");
}

addEventOnElements(playlistTogglers, "click", togglePlaylist);

const playlistItems = document.querySelectorAll("[data-playlist-item]");

let currentMusic = 0;
let lastPlayedMusic = 0;

const changePlaylistItem = function () {
  playlistItems[lastPlayedMusic].classList.remove("playing");
  playlistItems[currentMusic].classList.add("playing");
}

addEventOnElements(playlistItems, "click", function () {
  lastPlayedMusic = currentMusic;
  currentMusic = Number(this.dataset.playlistItem);
  changePlaylistItem();
});

const playerBanner = document.querySelector("[data-player-banner]");
const playerTitle = document.querySelector("[data-title]");
const playerAlbum = document.querySelector("[data-album]");
const playerYear = document.querySelector("[data-year]");
const playerArtist = document.querySelector("[data-artist]");

const audioSource = new Audio(musicData[currentMusic].musicPath);

const changePlayerInfo = function () {
  playerBanner.src = musicData[currentMusic].posterUrl;
  playerBanner.setAttribute("alt", `${musicData[currentMusic].title} Album Poster`);
  document.body.style.backgroundImage = `url(${musicData[currentMusic].backgroundImage})`;
  playerTitle.textContent = musicData[currentMusic].title;
  playerAlbum.textContent = musicData[currentMusic].album;
  playerYear.textContent = musicData[currentMusic].year;
  playerArtist.textContent = musicData[currentMusic].artist;

  audioSource.src = musicData[currentMusic].musicPath;

  audioSource.addEventListener("loadeddata", updateDuration);
  playMusic();
}

addEventOnElements(playlistItems, "click", changePlayerInfo);

const playerDuration = document.querySelector("[data-duration]");
const playerSeekRange = document.querySelector("[data-seek]");

const getTimecode = function (duration) {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.ceil(duration - (minutes * 60));
  const timecode = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  return timecode;
}

const updateDuration = function () {
  playerSeekRange.max = Math.ceil(audioSource.duration);
  playerDuration.textContent = getTimecode(Number(playerSeekRange.max));
}
audioSource.addEventListener("loadeddata", updateDuration);

const playBtn = document.querySelector("[data-play-btn]");

let playInterval;

const playMusic = function () {
  if (audioSource.paused) {
    audioSource.play();
    playBtn.classList.add("active");
    playInterval = setInterval(updateRunningTime, 500);
  } else {
    audioSource.pause();
    playBtn.classList.remove("active");
    clearInterval(playInterval);
  }
}

playBtn.addEventListener("click", playMusic);

const playerRunningTime = document.querySelector("[data-running-time");

const updateRunningTime = function () {
  playerSeekRange.value = audioSource.currentTime;
  playerRunningTime.textContent = getTimecode(audioSource.currentTime);

  updateRangeFill();
  isMusicEnd();
}

const ranges = document.querySelectorAll("[data-range]");
const rangeFill = document.querySelector("[data-range-fill]");

const updateRangeFill = function () {
  let element = this || ranges[0];

  const rangeValue = (element.value / element.max) * 100;
  element.nextElementSibling.style.width = `${rangeValue}%`;
}

addEventOnElements(ranges, "input", updateRangeFill);

const seek = function () {
  audioSource.currentTime = playerSeekRange.value;
  playerRunningTime.textContent = getTimecode(playerSeekRange.value);
}

playerSeekRange.addEventListener("input", seek);

const isMusicEnd = function () {
  if (audioSource.ended) {
    playBtn.classList.remove("active");
    playerSeekRange.value = 0;
    playerRunningTime.textContent = getTimecode(0);
    updateRangeFill();

    lastPlayedMusic = currentMusic;

    if (isShuffled) {
      shuffleMusic();
    } else {
      currentMusic = currentMusic >= musicData.length - 1 ? 0 : currentMusic + 1;
    }

    changePlayerInfo();
    changePlaylistItem();
  }
};


const playerSkipNextBtn = document.querySelector("[data-skip-next]");

const skipNext = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic >= musicData.length - 1 ? currentMusic = 0 : currentMusic++;
  }

  changePlayerInfo();
  changePlaylistItem();
}

playerSkipNextBtn.addEventListener("click", skipNext);

const playerSkipPrevBtn = document.querySelector("[data-skip-prev]");

const skipPrev = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic <= 0 ? currentMusic = musicData.length - 1 : currentMusic--;
  }

  changePlayerInfo();
  changePlaylistItem();
}

playerSkipPrevBtn.addEventListener("click", skipPrev);

const getRandomMusic = () => Math.floor(Math.random() * musicData.length);

const shuffleMusic = () => currentMusic = getRandomMusic();

const playerShuffleBtn = document.querySelector("[data-shuffle]");
let isShuffled = false;

const shuffle = function () {
  playerShuffleBtn.classList.toggle("active");

  isShuffled = isShuffled ? false : true;
}

playerShuffleBtn.addEventListener("click", shuffle);

const playerRepeatBtn = document.querySelector("[data-repeat]");

const repeat = function () {
  if (!audioSource.loop) {
    audioSource.loop = true;
    this.classList.add("active");
  } else {
    audioSource.loop = false;
    this.classList.remove("active");
  }
}

playerRepeatBtn.addEventListener("click", repeat);

const playerVolumeRange = document.querySelector("[data-volume]");
const playerVolumeBtn = document.querySelector("[data-volume-btn]");

const changeVolume = function () {
  audioSource.volume = playerVolumeRange.value;
  audioSource.muted = false;

  if (audioSource.volume <= 0.1) {
    playerVolumeBtn.children[0].textContent = "volume_mute";
  } else if (audioSource.volume <= 0.5) {
    playerVolumeBtn.children[0].textContent = "volume_down";
  } else {
    playerVolumeBtn.children[0].textContent = "volume_up";
  }
}

playerVolumeRange.addEventListener("input", changeVolume);

const muteVolume = function () {
  if (!audioSource.muted) {
    audioSource.muted = true;
    playerVolumeBtn.children[0].textContent = "volume_off";
  } else {
    changeVolume();
  }
}

playerVolumeBtn.addEventListener("click", muteVolume);
