export interface ConsultQueue {
  slot: number,
  project: string,
  mentor: string
}

export type ConsultMap = {
  [name: string]: {
    [project: string]: string
  }
}

export const queues: ConsultMap = {
  '18:20 - 18:40': {
    "Gunman and the Witch": "บอนนี่, จั่น, ปรอ",
    "Paper Piano": "จั่น นิ้งหน่อง นิ",
    "Pluk Kla": "ฟี่, บวบ"
  },
  "18:40 - 19:00": {
    "Kings of Dungeon": "บอนนี่",
    "Super Shrimp": "นิ้งหน่อง นิ",
    "iCrab": "บวบ ฟี่"
  },
  '19:00 - 19:20': {
    "Big Boss": "บอนนี่ นิ้งหน่อง",
    "จันทรทัศน์ (Lunar Wheel)": "นิ บวบ พฤศ",
    "มีดกรีดยางสายฟ้า": "ปรอ ฟี่ จั่น",
  },
  "19:20 - 19:40": {
    "Million Words (PPLG)": "บอนนี่ พฤศ",
    "Intelligent Toilet System (ห้องน้ำเด็กช่าง)": "ฟี่ บวบ",
    "Soft Silk": "จั่น นิ้งหน่อง"
  },
  "19:40 - 20:00": {
    "Bloody Buddy": "บอนนี่ นิ",
    "Clean Oyster": "ปรอ ฟี่",
  },
}
