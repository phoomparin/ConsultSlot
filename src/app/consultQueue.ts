import {allocate} from './allocateSlot'

export const startTime = '16:00'

export const tracks = ['ภูมิ', 'พล & ไดรฟ์', 'จูน & ปาแปง']

export const teams = [
  'SiamSecure - ศึกษา Use Caase ของการเกิดภัยคุกคาม',
  'TBKK - ระบบการเรียนรู้ในบริษัท',
  'Thai Summit Harness - ระบบดิจิทัลสำหรับติดต่องานเคาน์เตอร์',
  'TOT พัฒนาองค์กร - Dynamic Routing',
  'TOT ธุรกิจขาย - Sale Pipeline Management',
  'TOT คลาวด์ - Mobile App Ratchaburi Connect',
  'TOT คลาวด์ - Intelligent Incident Handling Assistance',
  'ธกส. - สลากบน Blockchain',
  'ปตท. - Corporate Data Analytics',
  'ปตท. - Automatic Vibration Data Analysis',
  'กลต. - ChatBot เพื่อการให้บริการ',
  'JTEKT - Production Daily Record System',
  'JTEKT - Visual Control Board System',
  'TOT พัฒนาองค์กร - Open Framework for Smart Communication',
  'G Able - Dashboard for Global Consumer App',
  'G Able - Data Analysis and Visibility',
  'G Able - DevOps Data Testing',
  'กระทรวงวัฒนธรรม - ปรับปรุงระบบรักษาความปลอดภัย'
]

export const maxSlots = 12

export const slots = allocate(tracks.length, teams.length, maxSlots)

export function getInfoFromSlot(slot: number) {
  const s = slots[slot]

  if (!s) return null

  return s.map(team => teams[team])
}

