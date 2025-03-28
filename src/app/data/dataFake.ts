export let dataFake = loadDataFromLocalStorage();

function loadDataFromLocalStorage(): any[] {
  const savedData = localStorage.getItem('dataFake');
  if (savedData) {
    const parsedData = JSON.parse(savedData);

    
    const uniqueIds = new Set();
    parsedData.forEach((item: any) => {
      if (uniqueIds.has(item.id)) {
        item.id = Date.now().toString() + Math.random().toString(36).substr(2, 9); // Gera um novo ID único
      }
      uniqueIds.add(item.id);
    });

    return parsedData;
  }

  return [
    {
      id: "1",
      title: "NOVO HOMEM DE FERRO EM 3D",
      description: "Marvel anuncia um novo filme do homem de ferro, confira",
      photoCover: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7F51FA9F6CBD9F0C9B1394B1CC0A6A842D07091318674E234CD33CBF7C28CDC3/scale?width=1200&aspectRatio=1.78&format=jpeg",
      createdAt: new Date().toISOString(),
      comments: [] 
    },
    {
      id: "2",
      title: "Nova Série anunciada no Disney +",
      description: "Lorem ipsum dolor sit amet. Aut consectetur vitae aut porro repudiandae et consequatur molestiae eum facere nobis vel voluptate debitis aut provident architecto sed fuga praesentium.",
      photoCover: "https://disneyplusbrasil.com.br/wp-content/uploads/2021/07/Series-Marvel-Disney-Plus-1024x576.jpg",
      createdAt: new Date().toISOString(),
      comments: [] 
    },
    
  ];
}

export function saveDataToLocalStorage(): void {
  localStorage.setItem('dataFake', JSON.stringify(dataFake));
}

export function addNewPost(title: string, description: string, photoCover: string): void {
  const newPost = {
    id: Date.now().toString(), 
    title,
    description,
    photoCover,
    createdAt: new Date().toISOString(),
    comments: []
  };

  dataFake.push(newPost);
  saveDataToLocalStorage();
}