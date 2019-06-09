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
  '18:00 - 18:20': {
    "Gunman and the Witch": "บอนนี่, จั่น, ปรอ   ",
    "Paper Piano": "Good Factory",
    "Pluk Kla": "ฟี่, บวบ"
  },
  "18:20 - 18:40": {
    "Kings of Dungeon": "บอนนี่",
    "What's the Fish?": "Good Factory, จั่น, ปรอ",
    "iCrab": "บวบ"
  },
  '18:40 - 19:00': {
    "Big Boss": "บอนนี่",
    "จันทรทัศน์ (Lunar Wheel)": "นิ, บวบ",
    "มีดกรีดยางสายฟ้า": "ปรอ, ฟี่, จั่น",
    "Super Shrimp": "พฤศ, นิ้งหน่อง"
  },
  "19:00 - 19:20": {
    "Million Words (PPLG)": "Good Factory, บอนนี่",
    "Intelligent Toilet System (ห้องน้ำเด็กช่าง)": "ฟี่, บวบ",
    "Soft Silk": "Good Factory"
  },
  "19:20 - 19:40": {
    "Bloody Buddy": "บอนนี่",
    "Clean Oyster": "ปรอ, ฟี่",
  },
}
