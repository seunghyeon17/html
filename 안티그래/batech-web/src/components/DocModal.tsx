"use client";

import { X, FileText, Download } from "lucide-react";
import { useEffect } from "react";

interface DocModalProps {
  isOpen: boolean;
  onClose: () => void;
  documentId: string | null;
}

const DOCUMENTS: Record<string, { title: string; url: string; fallbackUrl?: string }> = {
  photos: {
    title: "사진대장",
    url: "/docs/photos.pdf",
  },
  manual: {
    title: "유지관리지침서",
    url: "/docs/manual.pdf",
  },
  company_profile: {
    title: "지명원",
    url: "/docs/company_profile.pdf",
  },
};

export default function DocModal({ isOpen, onClose, documentId }: DocModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !documentId) return null;

  const doc = DOCUMENTS[documentId];
  if (!doc) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-5xl h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50">
          <div className="flex items-center gap-2 text-batech-blue">
            <FileText className="w-5 h-5" />
            <h3 className="font-bold text-lg">{doc.title}</h3>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={doc.url}
              download
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-batech-blue bg-batech-light rounded-md hover:bg-blue-100 transition-colors"
              title="다운로드"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">다운로드</span>
            </a>
            <button
              onClick={onClose}
              className="p-2 text-gray-500 hover:text-gray-800 hover:bg-gray-200 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Viewer Area */}
        <div className="flex-1 bg-gray-100 relative">
          <div className="absolute inset-0 flex flex-col items-center justify-center sm:hidden p-8 text-center bg-white">
            <FileText className="w-16 h-16 text-gray-300 mb-4" />
            <h4 className="text-lg font-bold mb-2">모바일 뷰어 제한</h4>
            <p className="text-gray-500 mb-6">
              모바일 환경에서는 원활한 확인을 위해<br />다운로드 후 확인해주세요.
            </p>
            <a
              href={doc.url}
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-batech-blue text-white rounded-lg font-medium shadow-md hover:bg-batech-dark transition-all"
            >
              <Download className="w-5 h-5" />
              다운로드
            </a>
          </div>
          <iframe
            src={`${doc.url}#view=FitH`}
            className="w-full h-full hidden sm:block border-0"
            title={doc.title}
          />
        </div>
      </div>
    </div>
  );
}
