//Number Format, titik(80000 Travelles -> 80.000)
export default number => {
    const formatNumbering = new Intl.NumberFormat("id-ID"); //API bawaan browser
    return formatNumbering.format(number)
};