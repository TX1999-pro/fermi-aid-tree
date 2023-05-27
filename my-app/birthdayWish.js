const HappyBirthdayToYou = (birthdayWishes) => {

    birthdayWishes.push({ "wish": "Wish you a happy and peaceful life!" });
    return birthdayWishes.forEach((wish) => { wish["states"] = "fulfilled"; });

}