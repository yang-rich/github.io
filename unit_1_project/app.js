$(() => {
  const getItem = async (id, div) => {
    //async() doesn't pause execution to run, will run after everything else. similar to what we learned in class but async+await pairing is apparently the current way to use this
    //calling an API takes a long time, so this queues getItem to run later
    const response = await fetch(`https://omegapepega.com/na/${id}/0`, {
      method: "GET",
      // headers: {
      //   "Content-Type": "application/json",
      // },
    });
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    // referencing name property from myJson to add text to div id we feed it to print weapon price
    $(`#${div}`).text(myJson.name + ": " + myJson.pricePerOne);
  };
  // // line 1 adds function to task queue - done with file b/c havent run anything
  // // event loop picks up function in task queue line 2-15
  // // line 2 executes and creates getItem function which is async function and does not run
  // // when getItem() comes up next, task queue sees we're trying to call the async function and adds it to the end of the list because that is what async() does
  // // we finish everything else in task queue first
  // // after hitting the "end" program hits the getItem functions to run last

  //generate name tags

  //set variables to reference div IDs
  const $modal = $("#modal");
  const $closeBtn = $("#close");

  //open modal
  const openModal = (event) => {
    const grabID = $(event.target).attr("id");
    console.log(grabID);
    // console.log(11 + $("#modal-vid").attr("src"));
    // console.log(library[grabID].iframe);
    //this if statement necessary b/c of how our close modal works ("detach()")
    //if our modal already exists (first click), then we simply display block and everything is great
    if ($("#modal").length > 0) {
      //get id and set the id to pull data for whatever else needs it runs the display block
      $modal.css("display", "block");
      //for any subsequent clicks, they will occur after our close modal's detach() so we need to append the modal back
    } else {
      $("body").append($modal);
      // console.log("2", $modal);
    }
    $("#modal-vid").attr("src", library[grabID].iframe);
    $("#awaken-image").attr("src", library[grabID].awakenImage);
    // }
    console.log(1 + library[grabID].awakenImage);

    getItem(library[grabID].kzarkaID, `kzarka`);
    getItem(library[grabID].dandelionID, `dandelion`);
    getItem(library[grabID].kutumID, `kutum`);
    // console.log("3", $modal);
  };
  //close modal
  // console.log("4", $modal);
  //close modal written using detach() instead of display hide b/c we needed everything on the modal to stop running (video/audio)
  const closeModal = () => {
    $modal.detach();
    // console.log($("#modal").length);
  };
  //on-clicks
  $(".classCard").on("click", openModal);
  $closeBtn.on("click", closeModal);
  //googled this, no idea why it works tbh
  window.onclick = function (event) {
    if (event.target == modal) {
      closeModal();
    }
  };
  // console.log(modal);
  //on-hover
  $(".classCard").on("hover", () => {
    $classCard.css("filter", "none");
  });
});

//made library to store all data needed to feed into API or dynamic modal
const library = {
  warrior: {
    iframe:
      "https://www.youtube.com/embed/F-dfn8CZKFg?list=PLkHkBMrxorhzBy3d5xaaNJwZdQDDAaWfx",
    awakenImage: "images/Class_Portraits/awaken_warrior.png",
    kzarkaID: 10010,
    dandelionID: 14702,
    kutumID: 10140,
  },
  ranger: {
    iframe:
      "https://www.youtube.com/embed/tkbn4cV3GFI?list=PLkHkBMrxorhzBy3d5xaaNJwZdQDDAaWfx",
    awakenImage: "images/Class_Portraits/awaken_ranger.png",
    kzarkaID: 10210,
    dandelionID: 14732,
    kutumID: 10340,
  },
  sorceress: {
    iframe:
      "https://www.youtube.com/embed/qvpxOiDrekI?list=PLkHkBMrxorhzBy3d5xaaNJwZdQDDAaWfx",
    awakenImage: "images/Class_Portraits/awaken_sorceress.png",
    kzarkaID: 10410,
    dandelionID: 14712,
    kutumID: 10540,
  },
  berserker: {
    iframe:
      "https://www.youtube.com/embed/nTaqLVUYTuM?list=PLkHkBMrxorhzBy3d5xaaNJwZdQDDAaWfx",
    awakenImage: "images/Class_Portraits/awaken_berserker.png",
    kzarkaID: 10610,
    dandelionID: 14722,
    kutumID: 10740,
  },
  tamer: {
    iframe:
      "https://www.youtube.com/embed/Fmj8X0RWHng?list=PLkHkBMrxorhzBy3d5xaaNJwZdQDDAaWfx",
    awakenImage: "images/Class_Portraits/awaken_tamer.png",
    kzarkaID: 14210,
    dandelionID: 14742,
    kutumID: 13040,
  },
  musa: {
    iframe:
      "https://www.youtube.com/embed/IqSlg2FlxaI?list=PLkHkBMrxorhzBy3d5xaaNJwZdQDDAaWfx",
    awakenImage: "images/Class_Portraits/awaken_musa.png",
    kzarkaID: 13310,
    dandelionID: 14762,
    kutumID: 13140,
  },
  maehwa: {
    iframe:
      "https://www.youtube.com/embed/xaffFaelW5I?list=PLkHkBMrxorhzBy3d5xaaNJwZdQDDAaWfx",
    awakenImage: "images/Class_Portraits/awaken_maehwa.png",
    kzarkaID: 13310,
    dandelionID: 14772,
    kutumID: 13140,
  },
  valkyrie: {
    iframe:
      "https://www.youtube.com/embed/86ioPn4rFko?list=PLkHkBMrxorhzBy3d5xaaNJwZdQDDAaWfx",
    awakenImage: "images/Class_Portraits/awaken_valkyrie.png",
    kzarkaID: 10010,
    dandelionID: 14752,
    kutumID: 10140,
  },
  kunoichi: {
    iframe:
      "https://www.youtube.com/embed/BvN3AzI3GeA?list=PLkHkBMrxorhzBy3d5xaaNJwZdQDDAaWfx",
    awakenImage: "images/Class_Portraits/awaken_kunoichi.png",
    kzarkaID: 13210,
    dandelionID: 14792,
    kutumID: 14640,
  },
  ninja: {
    iframe:
      "https://www.youtube.com/embed/_TVsOfilA1E?list=PLkHkBMrxorhzBy3d5xaaNJwZdQDDAaWfx",
    awakenImage: "images/Class_Portraits/awaken_ninja.png",
    kzarkaID: 13210,
    dandelionID: 14782,
    kutumID: 14640,
  },
  wizard: {
    iframe:
      "https://www.youtube.com/embed/M2qmPbQRnrY?list=PLkHkBMrxorhzBy3d5xaaNJwZdQDDAaWfx",
    awakenImage: "images/Class_Portraits/awaken_wizard.png",
    kzarkaID: 14410,
    dandelionID: 14812,
    kutumID: 10340,
  },
  witch: {
    iframe:
      "https://www.youtube.com/embed/dbxB5lyCLFg?list=PLkHkBMrxorhzBy3d5xaaNJwZdQDDAaWfx",
    awakenImage: "images/Class_Portraits/awaken_witch.png",
    kzarkaID: 14410,
    dandelionID: 14802,
    kutumID: 10340,
  },
  darkknight: {
    iframe:
      "https://www.youtube.com/embed/GmDzng0xwcU?list=PLkHkBMrxorhzBy3d5xaaNJwZdQDDAaWfx",
    awakenImage: "images/Class_Portraits/awaken_darkknight.png",
    kzarkaID: 11360,
    dandelionID: 14817,
    kutumID: 10740,
  },
  striker: {
    iframe:
      "https://www.youtube.com/embed/hpg4Ax5RUjE?list=PLkHkBMrxorhzBy3d5xaaNJwZdQDDAaWfx",
    awakenImage: "images/Class_Portraits/awaken_striker.png",
    kzarkaID: 11210,
    dandelionID: 14822,
    kutumID: 11340,
  },
  mystic: {
    iframe:
      "https://www.youtube.com/embed/D6CM6yPzxAw?list=PLkHkBMrxorhyY5d6ahMVLdvkEBK9xAFMw",
    awakenImage: "images/Class_Portraits/awaken_mystic.png",
    kzarkaID: 11210,
    dandelionID: 14830,
    kutumID: 11340,
  },
  archer: {
    iframe:
      "https://www.youtube.com/embed/uhsd5YvoWaM?list=PLkHkBMrxorhyY5d6ahMVLdvkEBK9xAFMw",
    awakenImage: "images/Class_Portraits/awaken_archer.png",
    kzarkaID: 13710,
    dandelionID: 13903,
    kutumID: 13840,
  },
  lahn: {
    iframe: "https://www.youtube.com/embed/l5ZPl_22v0w",
    awakenImage: "images/Class_Portraits/awaken_lahn.png",
    kzarkaID: 13410,
    dandelionID: 550502,
    kutumID: 13540,
  },
  shai: {
    iframe: "https://www.youtube.com/embed/V27Zr7GgSF0",
    awakenImage: "images/Class_Portraits/awaken_shai.png",
    kzarkaID: 718510,
    kutumID: 719040,
  },
  guardian: {
    iframe:
      "https://www.youtube.com/embed/r9jA5kjDg-4?list=RDCMUCcO-TjLkDNzvYrlPkOHgnfA",
    awakenImage: "images/Class_Portraits/awaken_guardian.png",
    kzarkaID: 690513,
    dandelionID: 691503,
    kutumID: 10140,
  },
};
