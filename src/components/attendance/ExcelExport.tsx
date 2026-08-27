"use client";
import * as XLSX from "xlsx";
import type { ApiAttendance, ApiStudent, ApiModule } from "@/lib/api";

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  return `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}/${d.getFullYear()}`;
}

function formatTime(dateStr?: string) {
  if (!dateStr) return "-";
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return "-";
  return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

interface ExcelExportProps {
  attendances: ApiAttendance[];
  students: ApiStudent[];
  modules: ApiModule[];
  filterDate?: string;
}

const getStudentName = (student: ApiStudent | undefined, fallback: string) =>
  student?.fullNameEnglish ?? student?.fullNameTamil ?? fallback;

export function downloadAttendanceExcel({
  attendances,
  students,
  modules,
  filterDate,
}: ExcelExportProps) {
  const rows = attendances.map((record) => {
    const student = students.find((s) => s.studentId === record.studentId);
    const module = modules.find((m) => m._id === record.moduleId);
    return {
      Date: formatDate(record.sessionDate || record.date),
      Module: module?.name ?? record.moduleName ?? record.moduleId,
      Batch: module?.batch ?? student?.batch ?? "-",
      "Student ID": record.studentId,
      "Student Name": getStudentName(student, record.studentId),
      Status: record.status.toUpperCase(),
      "Marked Time": formatTime(record.markedAt),
    };
  });

  const worksheet = XLSX.utils.json_to_sheet(rows);
  worksheet["!cols"] = [
    { wch: 14 },
    { wch: 24 },
    { wch: 16 },
    { wch: 16 },
    { wch: 28 },
    { wch: 12 },
    { wch: 16 },
  ];
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Attendance");
  XLSX.writeFile(
    workbook,
    `attendance${filterDate ? `-${filterDate}` : ""}.xlsx`,
  );
}
