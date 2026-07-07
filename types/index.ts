import type { LucideIcon } from 'lucide-react'

export interface IconCard {
  icon: LucideIcon
  title: string
  desc: string
}

export interface NumberedStep {
  num: string
  title: string
  desc: string
}

export interface SectorCard {
  title: string
  desc: string
  img: string
}

export interface NamedSector {
  name: string
  img: string
  desc: string
}

export interface FaqItem {
  q: string
  a: string
}

export type NumericCredential = {
  type: 'numeric'
  value: number
  prefix?: string
  suffix?: string
  sub: string
}

export type TextCredential = {
  type: 'text'
  label: string
  sub: string
}

export type Credential = NumericCredential | TextCredential

export interface NavItem {
  to: string
  label: string
  dropdown?: boolean
}

export interface DropdownLink {
  to: string
  label: string
}

export interface ContactFormData {
  fullName: string
  company?: string
  email: string
  phone?: string
  industry?: string
  service?: string
  message?: string
}

export interface EnquiryFormData {
  name: string
  email: string
  phone?: string
  industry: string
  message: string
}

export type ActionResult = { success: true } | { error: string }
