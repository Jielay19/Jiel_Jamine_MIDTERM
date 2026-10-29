const RANDOM_API = 'https://dog.ceo/api/breeds/image/random/12';
const BREEDS_LIST_API = 'https://dog.ceo/api/breeds/list/all';

const exactBreedDescriptions = {
  "affenpinscher": "The Affenpinscher is a fearless, curious, and amusing toy breed with a distinctive monkey-like facial expression and a confident strut.",
  "african": "The African Dog or African Village Dog is resilient, intelligent, and highly adaptable, possessing natural survival instincts and a rich heritage.",
  "airedale": "The Airedale Terrier is the largest of all terriers, known for being courageous, clever, sporty, and fiercely loyal to family.",
  "akita": "The Akita is a large, dignified, and profoundly loyal dog breed originating from Japan, known for unwavering courage and quiet strength.",
  "appenzeller": "The Appenzeller Sennenhund is a lively, high-energy, and agile farm dog from Switzerland, characterized by a striking tricolor coat.",
  "australian-kelpie": "The Australian Kelpie is an exceptionally energetic, intelligent, and tireless working herding dog with unmatched agility.",
  "australian-shepherd": "The Australian Shepherd is a smart, work-oriented herding dog with a gorgeous coat and an intense desire to have a job to do.",
  "basset": "The Basset Hound is famously laid-back, stubborn yet affectionate, possessing long velvety ears and a powerful sense of smell.",
  "beagle": "The Beagle is curious, friendly, and merry, boasting a phenomenal sense of smell and a loving, cheerful personality.",
  "bluetick": "The Bluetick Coonhound is an athletic, vocal, and tenacious hunting hound with a striking mottled dark blue coat.",
  "borzoi": "The Borzoi is a large, aristocratic, and remarkably swift sighthound known for a silky coat and quiet, cat-like demeanor.",
  "bouvier": "The Bouvier des Flandres is a powerful, fearless, and protective herding dog with a rugged weatherproof coat.",
  "boxer": "The Boxer is a fun-loving, bright, and active breed that is exceptionally patient and protective with children.",
  "brabancon": "The Brussels Griffon (Brabancon) is a sensitive, alert, and affectionate toy breed with a human-like expression and big soulful eyes.",
  "briard": "The Briard is a large, French herding dog distinguished by a wavy coat, incredible intelligence, and devoted loyalty.",
  "buhund": "The Norwegian Buhund is an energetic, vocal, and cheerful spitz-type dog that loves being active with its human pack.",
  "bulldog": "The Bulldog is calm, courageous, and friendly, known for distinctive wrinkled faces and a gentle demeanor with families.",
  "bullterrier": "The Miniature and Standard Bull Terrier is playful, mischievous, and bold, recognized by their egg-shaped head and clownish antics.",
  "cairn": "The Cairn Terrier is a hardy, alert, and inquisitive little terrier that loves digging and exploring the outdoors.",
  "chihuahua": "The Chihuahua is a tiny dog with a huge personality, known for loyalty, sassiness, and being an affectionate lap dog.",
  "chow": "The Chow Chow is a dignified, independent, and serious Chinese breed famous for its unique blue-black tongue and lion-like mane.",
  "clumber": "The Clumber Spaniel is a gentle, mellow, and thoughtful hunting dog characterized by a heavy build and creamy white coat.",
  "cockapoo": "The Cockapoo is a popular, highly affectionate, and intelligent poodle-cocker spaniel cross known for a friendly disposition.",
  "collie": "The Collie is celebrated for grace, loyalty, and high intellect, serving as devoted family protectors and historic herders.",
  "coonhound": "The Black and Tan Coonhound is an easygoing, gentle tracker with a deep melodic bay and impressive stamina.",
  "corgi": "The Pembroke Welsh Corgi is spirited, affectionate, and alert despite short legs, highly popular and undeniably charming.",
  "cotondetulear": "The Coton de Tulear is a cheerful, cotton-coated companion dog from Madagascar known for playful and loving antics.",
  "dachshund": "The Dachshund is clever, vivacious, and courageous, easily recognized by their distinct long bodies and short legs.",
  "dalmatian": "The Dalmatian is a distinctively spotted, outgoing, and athletic dog with a rich history as carriage and firehouse companions.",
  "dane": "The Great Dane is a gentle giant, combining immense power and elegance with a remarkably sweet and affectionate nature.",
  "deerhound": "The Scottish Deerhound is a gentle, friendly, and majestic sighthound often called the 'royal dog of Scotland'.",
  "dhole": "The Dhole is an Asiatic wild dog known for fierce pack hunting cooperation, high agility, and reddish coats.",
  "dingo": "The Dingo is an ancient Australian wild canine known for high cunning, alertness, and deep survival instincts.",
  "doberman": "The Doberman Pinscher is a powerful, sleek, and highly intelligent guard dog known for loyalty and lightning-fast reflexes.",
  "elkhound": "The Norwegian Elkhound is a bold, energetic, and loyal canine companion known for playfulness and great intelligence.",
  "entlebucher": "The Entlebucher Mountain Dog is the smallest of Swiss mountain dogs, known for boundless energy and loyal devotion.",
  "eskimo": "The American Eskimo Dog is an alert, friendly, and striking white spitz breed with a brilliant mind and fluffy coat.",
  "finnish-lapphund": "The Finnish Lapphund is a friendly, calm, and thick-coated herding spitz with a very gentle and receptive personality.",
  "frise": "The Bichon Frise is a cheerful, hypoallergenic, and playful little white dog famous for a powder-puff fluffy haircut.",
  "germanshepherd": "The German Shepherd is characterized by confidence, courage, and sharp intelligence, widely recognized for service and protection.",
  "greyhound": "The Greyhound is a gentle, quiet, and lightning-fast athlete that surprisingly loves lounging on soft couches all day.",
  "groenendael": "The Belgian Groenendael is an elegant, intelligent, and intensely loyal black-coated herding dog.",
  "havanese": "The Havanese is a cheerful, adaptable, and affectionate toy breed from Cuba with a silky coat and expressive eyes.",
  "hound": "The Ibizan Hound is an agile, graceful, and athletic rabbit hunter known for enormous erect ears and leaping ability.",
  "husky": "The Siberian Husky is energetic, outgoing, and resilient, renowned for striking eyes and a history of sled-pulling.",
  "keeshond": "The Keeshond is a plush-coated, affectionate, and friendly companion dog recognized by 'spectacle' markings around its eyes.",
  "kelpie": "The Australian Kelpie is an exceptionally energetic, intelligent, and tireless working herding dog.",
  "komondor": "The Komondor is a large Hungarian livestock guardian instantly famous for its unique white corded coat like dreadlocks.",
  "kuvasz": "The Kuvasz is a majestic, large white guard dog from Hungary combining fearless protection with deep family devotion.",
  "labrador": "The Labrador Retriever is America's sweetheart dog, famously friendly, outgoing, eager to please, and highly trainable.",
  "leonberger": "The Leonberger is a giant, gentle, and friendly lion-like dog with a waterproof coat and serene temperament.",
  "lhasa": "The Lhasa Apso is an ancient, confident, and independent Tibetan palace guard with a long flowing floor-length coat.",
  "malamute": "The Alaskan Malamute is a powerful, heavy-duty arctic sled dog built for strength, endurance, and deep loyalty.",
  "malinois": "The Belgian Malinois is an intense, hardworking, and hyper-intelligent protection and police dog with limitless energy.",
  "maltese": "The Maltese is a gentle, affectionate toy dog featuring a pristine white silky coat and a fearless little attitude.",
  "mastiff": "The Mastiff is a majestic giant, known for being courageous and affectionate protectors with a remarkably gentle heart.",
  "mexicanhairless": "The Xoloitzcuintli (Mexican Hairless Dog) is an ancient, loyal, and calm companion known for smooth skin and alertness.",
  "mix": "A delightful mixed-breed dog that combines unique traits, looks, and wonderful personality elements from multiple lineages.",
  "mountain": "The Bernese Mountain Dog is a large, striking, tricolor Swiss farm dog known for calm strength and gentle affection.",
  "newfoundland": "The Newfoundland is a giant sweetheart of a dog, famously known as an incredible water rescue swimmer and gentle giant.",
  "otterhound": "The Otterhound is a rare, large, and affectionate hound with a rough double coat and webbed feet designed for swimming.",
  "papillon": "The Papillon is happy, alert, and friendly, famous for butterfly-like ears and remarkable trainability.",
  "pekinese": "The Pekingese is an aristocratic, regal, and affectionate toy breed with a rolling gait and ancient royal Chinese history.",
  "pembroke": "The Pembroke Welsh Corgi is spirited, affectionate, and alert despite short legs, highly popular and undeniably charming.",
  "pinscher": "The Miniature Pinscher is a fearless, energetic, and proud toy breed with a high-stepping hackney gait.",
  "pitbull": "The American Pit Bull Terrier is strong, confident, and eager to please, known for deep loyalty and athletic prowess.",
  "pointer": "The English Pointer is an elite, high-energy hunting dog with a sleek frame and natural instinct to point at game.",
  "pomeranian": "The Pomeranian is an extroverted, lively, and intelligent little dog graced with an abundant fluffy coat and bubbly spirit.",
  "poodle": "The Poodle is exceptionally smart, active, and proud, famous for hypoallergenic coats and quick agility.",
  "pug": "The Pug is charming, mischievous, and deeply affectionate, recognized by charming wrinkles and curly tails.",
  "pyrenees": "The Great Pyrenees is a massive, calm, and fearless mountain guardian dog with a thick white coat and gentle nature.",
  "redbone": "The Redbone Coonhound is a sleek, red-coated, agile tracker known for speed and an easygoing family disposition.",
  "retriever": "The Golden Retriever is famously friendly, intelligent, and devoted, popular as family companions and service animals.",
  "ridgeback": "The Rhodesian Ridgeback is a dignified, athletic hound from Africa recognized by the distinctive stripe of hair growing backward.",
  "rottweiler": "The Rottweiler is a robust, confident, and deeply devoted working dog with a natural instinct to protect its family.",
  "saluki": "The Saluki is a graceful, gentle, and swift sighthound known throughout history for elegance, speed, and quiet independence.",
  "samoyed": "The Samoyed is powerful, tireless, and gentle, famous for their signature 'Sammy smile' and shimmering white coat.",
  "schipperke": "The Schipperke is a small, curious, and fearless black Belgian dog often nicknamed the 'little black fox'.",
  "schnauzer": "The Miniature and Standard Schnauzer is a smart, spirited, and distinctive bearded dog with high energy and loyalty.",
  "setter": "The Irish Setter is a red-coated, high-spirited, and affectionate sporting dog known for exuberance and beauty.",
  "sheepdog": "The Shetland Sheepdog is a bright, obedient, and agile herding dog blessed with a gorgeous coat and intense loyalty.",
  "shiba": "The Shiba Inu is alert, active, and fiercely independent, possessing a fox-like appearance and proud demeanor.",
  "shihtzu": "The Shih Tzu is an affectionate, playful, and charming toy breed originally bred for Chinese royalty.",
  "spaniel": "The Cocker Spaniel is an outgoing, gentle, and sweet-tempered sporting dog with gorgeous floppy ears and silky hair.",
  "spitz": "The Japanese Spitz is an intelligent, playful, and pure white companion dog known for loyalty and a joyful smile.",
  "springer": "The English Springer Spaniel is an eager, affectionate, and enthusiastic gun dog with boundless energy and grace.",
  "stbernard": "The St. Bernard is a legendary giant rescue dog known for immense strength, gentleness, and warm hospitality.",
  "terrier": "The terrier group consists of feisty, energetic, and courageous dogs known for bold hearts and lively companionship.",
  "vizsla": "The Vizsla is an affectionate, gentle, and high-energy sporting dog renowned for closeness to humans and golden-rust coat.",
  "waterdog": "The Spanish Water Dog is a hardworking, athletic, and curly-coated multi-talented herding and fishing companion.",
  "weimaraner": "The Weimaraner is a sleek, intelligent, and energetic grey ghost dog known for intense human attachment.",
  "whippet": "The Whippet is a calm, affectionate, and lightning-fast sprinter that transforms into a total couch potato indoors.",
  "wolfhound": "The Irish Wolfhound is a towering, gentle giant recognized as the tallest of all dog breeds with a calm dignity."
};

function getAccurateDescription(breedString) {
  const cleanKey = breedString.toLowerCase().replace(/[^a-z]/g, "");
  for (const key in exactBreedDescriptions) {
    if (cleanKey.includes(key)) {
      return exactBreedDescriptions[key];
    }
  }
  return "A wonderful and distinct canine companion known for unique charm, loving temperament, and delightful personality traits.";
}

async function fetchDogGallery() {
  const dogGrid = document.getElementById('dogGrid');
  const endpointEl = document.getElementById('endpointText');
  const explorerBox = document.getElementById('explorerInfoContainer');
  
  if (explorerBox) explorerBox.classList.add('hidden');
  if (endpointEl) endpointEl.textContent = '/breeds/image/random';
  
  dogGrid.innerHTML = `
    <div style="grid-column: 1/-1; text-align: center; padding: 60px; color: #6c4f57;">
      <i class="fa-solid fa-spinner fa-spin fa-2x"></i><br><br>Loading gallery...
    </div>`;

  try {
    let dogImages = [];

    try {
      const response = await axios.get(RANDOM_API);
      dogImages = response.data.message;
    } catch (axiosErr) {
      const res = await fetch(RANDOM_API);
      const data = await res.json();
      dogImages = data.message;
    }

    if (!dogImages || dogImages.length === 0) throw new Error('No data received');

    dogGrid.innerHTML = '';

    dogImages.forEach((imageUrl) => {
      const urlParts = imageUrl.split('/');
      const breedRaw = urlParts[4] || 'Dog';
      const breedName = breedRaw.split('-').reverse().join(' ');
      const formattedTitle = breedName.charAt(0).toUpperCase() + breedName.slice(1);

      const card = document.createElement('div');
      card.className = 'dog-card';
      card.innerHTML = `
        <img src="${imageUrl}" alt="${formattedTitle}" class="dog-img" loading="lazy">
        <div class="dog-info">
          <div class="dog-breed"><i class="fa-solid fa-heart" style="color: #d63384;"></i> ${formattedTitle}</div>
          <button class="info-btn" title="View details"><i class="fa-solid fa-info"></i></button>
        </div>
      `;

      card.addEventListener('click', () => {
        openRandomModal(formattedTitle, imageUrl, breedRaw);
      });

      dogGrid.appendChild(card);
    });

  } catch (error) {
    console.error('API Error:', error);
    dogGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #b03060; padding: 40px;">Failed to fetch API data. Please check your network connection.</p>`;
  }
}

async function setupBreedExplorer() {
  const dogGrid = document.getElementById('dogGrid');
  const actionControls = document.getElementById('actionControls');
  const endpointEl = document.getElementById('endpointText');
  const explorerBox = document.getElementById('explorerInfoContainer');
  
  if (explorerBox) explorerBox.classList.add('hidden');
  if (endpointEl) endpointEl.textContent = '/breed/{name}/images';
  document.getElementById('viewTitle').textContent = 'Dog Breed Directory';

  dogGrid.innerHTML = `
    <div style="grid-column: 1/-1; text-align: center; padding: 60px; color: #6c4f57;">
      <i class="fa-solid fa-spinner fa-spin fa-2x"></i><br><br>Loading breed categories...
    </div>`;

  try {
    let breedNames = [];
    try {
      const response = await axios.get(BREEDS_LIST_API);
      breedNames = Object.keys(response.data.message);
    } catch (e) {
      const res = await fetch(BREEDS_LIST_API);
      const data = await res.json();
      breedNames = Object.keys(data.message);
    }

    actionControls.innerHTML = `
      <select id="breedSelect">
        <option value="">Select Dog Breed</option>
        ${breedNames.map(b => `<option value="${b}">${b.toUpperCase()}</option>`).join('')}
      </select>
    `;

    document.getElementById('breedSelect').addEventListener('change', async (e) => {
      const selected = e.target.value;
      if (selected) await fetchBreedImages(selected);
    });

    dogGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #6c4f57; padding: 50px;">Select a breed from the scrollable menu above to display its description and photo gallery!</p>`;

  } catch (error) {
    console.error(error);
  }
}

async function fetchBreedImages(breedName) {
  const dogGrid = document.getElementById('dogGrid');
  const endpointEl = document.getElementById('endpointText');
  const explorerBox = document.getElementById('explorerInfoContainer');
  const explorerTitle = document.getElementById('explorerBreedTitle');
  const explorerDesc = document.getElementById('explorerBreedDesc');
  
  if (endpointEl) endpointEl.textContent = `/breed/${breedName}/images`;

  const formattedTitle = breedName.split('-').reverse().join(' ');
  explorerTitle.textContent = formattedTitle.toUpperCase();
  explorerDesc.textContent = getAccurateDescription(breedName);
  explorerBox.classList.remove('hidden');

  dogGrid.innerHTML = `
    <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #6c4f57;">
      <i class="fa-solid fa-spinner fa-spin fa-2x"></i><br><br>Loading ${breedName} gallery...
    </div>`;

  try {
    let images = [];
    const url = `https://dog.ceo/api/breed/${breedName}/images`;
    try {
      const response = await axios.get(url);
      images = response.data.message.slice(0, 12);
    } catch (e) {
      const res = await fetch(url);
      const data = await res.json();
      images = data.message.slice(0, 12);
    }

    dogGrid.innerHTML = '';
    images.forEach((imgUrl) => {
      const card = document.createElement('div');
      card.className = 'dog-card';
      card.innerHTML = `
        <img src="${imgUrl}" alt="${formattedTitle}" class="dog-img" loading="lazy">
        <div class="dog-info">
          <button class="info-btn" title="View picture"><i class="fa-solid fa-eye"></i></button>
        </div>
      `;

      card.addEventListener('click', () => {
        openExplorerModal(imgUrl);
      });

      dogGrid.appendChild(card);
    });
  } catch (err) {
    console.error(err);
  }
}

function openRandomModal(breedTitle, imgUrl, key) {
  const modal = document.getElementById('randomModal');
  document.getElementById('randomModalImg').src = imgUrl;
  document.getElementById('randomModalTitle').textContent = breedTitle;
  document.getElementById('randomModalDesc').textContent = getAccurateDescription(key);
  modal.classList.remove('hidden');
}

function openExplorerModal(imgUrl) {
  const modal = document.getElementById('explorerModal');
  document.getElementById('explorerModalImg').src = imgUrl;
  modal.classList.remove('hidden');
}

document.getElementById('closeRandomModal').addEventListener('click', () => {
  document.getElementById('randomModal').classList.add('hidden');
});
document.getElementById('randomModal').addEventListener('click', (e) => {
  if (e.target.id === 'randomModal') {
    document.getElementById('randomModal').classList.add('hidden');
  }
});

document.getElementById('closeExplorerModal').addEventListener('click', () => {
  document.getElementById('explorerModal').classList.add('hidden');
});
document.getElementById('explorerModal').addEventListener('click', (e) => {
  if (e.target.id === 'explorerModal') {
    document.getElementById('explorerModal').classList.add('hidden');
  }
});

document.getElementById('tabGallery').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('tabGallery').className = 'nav-item active';
  document.getElementById('tabExplorer').className = 'nav-item';
  document.getElementById('viewTitle').textContent = 'Dog Breed Directory';
  document.getElementById('actionControls').innerHTML = `
    <button id="fetchBtn" class="btn-primary">
      <i class="fa-solid fa-arrows-rotate"></i> Discover Dogs
    </button>
  `;
  const fetchBtn = document.getElementById('fetchBtn');
  if (fetchBtn) fetchBtn.addEventListener('click', fetchDogGallery);
  fetchDogGallery();
});

document.getElementById('tabExplorer').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('tabExplorer').className = 'nav-item active';
  document.getElementById('tabGallery').className = 'nav-item';
  setupBreedExplorer();
});

window.addEventListener('DOMContentLoaded', () => {
  const fetchBtn = document.getElementById('fetchBtn');
  if (fetchBtn) {
    fetchBtn.addEventListener('click', fetchDogGallery);
  }
  fetchDogGallery();
});