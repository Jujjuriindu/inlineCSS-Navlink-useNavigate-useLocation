import React from "react";
import { Link } from "react-router-dom";

function WelcomePage() {
  return (
    <div className="welcomeNew">
      <div>
        <Link to="/images">Images</Link>
      </div>
      <h1 className="welcomeNew1" style={{ fontStyle: "italic" }}>
        WELCOME
      </h1>
      <h2 className="welcomeNew2">TO THE BEST WEB ART</h2>
      <p>
        Art is a diverse range of cultural activity centered around works by
        creative or imaginative talents, which are expected to induce a
        worthwhile experience,[1] generally through the expression of emotional
        power, conceptual ideas, beauty, and/or technical proficiency.[2][3][4]
        There is no generally agreed definition of what constitutes
        art,[5][6][7] and its interpretation has varied greatly throughout
        history and across cultures. In the Western tradition, the three
        classical branches of visual art are painting, sculpture, and
        architecture.[8] Theatre, dance, and other performing arts, as well as
        literature, music, film and other media such as interactive media, are
        included in a broader definition of "the arts".[2][9] Until the 17th
        century, art referred to any skill or mastery and was not differentiated
        from crafts or sciences. In modern usage after the 17th century, where
        aesthetic considerations are paramount, the fine arts are separated and
        distinguished from acquired skills in general, such as the decorative or
        applied arts. The nature of art and related concepts, such as creativity
        and interpretation, are explored in a branch of philosophy known as
        aesthetics.[10] The resulting artworks are studied in the professional
        fields of art criticism and the history of art.
      </p>
      <h2 style={{ fontStyle: "italic" }}>Overview:</h2>
      <p className="paraGraph">
        In the perspective of the history of art,[11] artistic works have
        existed for almost as long as humankind: from early prehistoric art to
        contemporary art; however, some theorists think that the typical concept
        of "artistic works" does not fit well outside modern Western
        societies.[12] One early sense of the definition of art is closely
        related to the older Latin meaning, which roughly translates to "skill"
        or "craft", as associated with words such as "artisan". English words
        derived from this meaning include artifact, artificial, artifice,
        medical arts, and military arts. However, there are many other
        colloquial uses of the word, all with some relation to its etymology.
        Over time, philosophers like Plato, Aristotle, Socrates and Immanuel
        Kant, among others, questioned the meaning of art.[13] Several dialogues
        in Plato tackle questions about art, while Socrates says that poetry is
        inspired by the muses and is not rational. He speaks approvingly of
        this, and other forms of divine madness (drunkenness, eroticism, and
        dreaming) in the Phaedrus, and yet in the Republic wants to outlaw
        Homer's great poetic art, and laughter as well. In Ion, Socrates gives
        no hint of the disapproval of Homer that he expresses in the Republic.
        The dialogue Ion suggests that Homer's Iliad functioned in the ancient
        Greek world as the Bible does today in the modern Christian world: as
        divinely inspired literary art that can provide moral guidance, if only
        it can be properly interpreted.[14]
      </p>
      <h2 style={{ fontStyle: "italic" }}>History:</h2>
      <p className="historyArt">
        A shell engraved by Homo erectus was determined to be between 430,000
        and 540,000 years old.[30] A set of eight 130,000 years old white-tailed
        eagle talons bear cut marks and abrasion that indicate manipulation by
        neanderthals, possibly for using it as jewelry.[31] A series of tiny,
        drilled snail shells about 75,000 years old—were discovered in a South
        African cave.[32] Containers that may have been used to hold paints have
        been found dating as far back as 100,000 years.[33] The oldest piece of
        art found in Europe is the Riesenhirschknochen der Einhornhöhle, dating
        back 51,000 years and made by Neanderthals. Sculptures, cave paintings,
        rock paintings and petroglyphs from the Upper Paleolithic dating to
        roughly 40,000 years ago have been found,[34] but the precise meaning of
        such art is often disputed because so little is known about the cultures
        that produced them.
      </p>
    </div>
  );
}

export default WelcomePage;
