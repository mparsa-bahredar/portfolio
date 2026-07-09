import moment from "jalali-moment";

export const FormatDate = (
  date: string | number | undefined,
  lng: string,
  format: "full" | "year" = "full"
) => {
  if (!date) return "-";

  const formatPattern = format === "year" 
    ? (lng === "fa" ? "jYYYY" : "YYYY")
    : (lng === "fa" ? "jYYYY/jMM/jDD" : "YYYY/MM/DD");

  if (lng === "fa") {
    return moment(date, ["jYYYY/jMM/jDD", "jYYYY-MM-DD"])
      .locale("fa")
      .format(formatPattern)
      .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);
  }

  return moment(date, ["jYYYY/jMM/jDD", "jYYYY-MM-DD"])
    .locale("en")
    .format(formatPattern);
};