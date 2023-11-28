const items = ["réservé", "premier", "communiqué", "café", "adieu", "éclair"];
const ans = items.sort((a, b) => a.localeCompare(b));

const timezones = [
  {
    full_time_zone_name: "Central European Time",
    gmt_offset: "+02:00",
    zone: "Europe/Andorra",
  },
  {
    full_time_zone_name: "Gulf Standard Time",
    gmt_offset: "+04:00",
    zone: "Asia/Dubai",
  },
  {
    full_time_zone_name: "Afghanistan Time",
    gmt_offset: "+04:30",
    zone: "Asia/Kabul",
  },
  {
    full_time_zone_name: "Atlantic Standard Time",
    gmt_offset: "-04:00",
    zone: "America/Antigua",
  },
  {
    full_time_zone_name: "Atlantic Standard Time",
    gmt_offset: "-04:00",
    zone: "America/Anguilla",
  },
  {
    full_time_zone_name: "Central European Time",
    gmt_offset: "+02:00",
    zone: "Europe/Tirane",
  },
  {
    full_time_zone_name: "Armenia Time",
    gmt_offset: "+04:00",
    zone: "Asia/Yerevan",
  },
  {
    full_time_zone_name: "Western African Time",
    gmt_offset: "+00:00",
    zone: "Africa/Luanda",
  },
  {
    full_time_zone_name: "Australian Western Standard Time",
    gmt_offset: "-11:00",
    zone: "Antarctica/Casey",
  },
  {
    full_time_zone_name: "Davis Time",
    gmt_offset: "+07:00",
    zone: "Antarctica/Davis",
  },
  {
    full_time_zone_name: "Dumont-d'Urville Time",
    gmt_offset: "+10:00",
    zone: "Antarctica/DumontDUrville",
  },
  {
    full_time_zone_name: "Mawson Time",
    gmt_offset: "+05:00",
    zone: "Antarctica/Mawson",
  },
  {
    full_time_zone_name: "New Zealand Standard Time",
    gmt_offset: "-12:00",
    zone: "Antarctica/McMurdo",
  },
];

const sortOffset = timezones.sort((a, b) =>
  parseFloat(a.gmt_offset.replace(":", ".")) <
  parseFloat(b.gmt_offset.replace(":", "."))
    ? -1
    : 1
);
console.log(sortOffset);
