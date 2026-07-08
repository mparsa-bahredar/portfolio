import moment from "jalali-moment";

export const FormatDate = (
  date: string | number | undefined,
  lng: string
) => {
  if (!date) return "-";

  if (lng === "fa") {
    return moment(date, ["jYYYY/jMM/jDD", "jYYYY-MM-DD"])
      .locale("fa")
      .format("jYYYY/jMM/jDD")
      .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);
  }

  return moment(date, ["jYYYY/jMM/jDD", "jYYYY-MM-DD"])
    .locale("en")
    .format("YYYY/MM/DD");
};