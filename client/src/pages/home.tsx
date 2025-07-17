import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Link } from "wouter";
import RecordingInterface from "@/components/recording-interface";
import { Recording } from "@shared/schema";
import { Mic, Clock, Settings, History, Trash2, Download } from "lucide-react";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const { toast } = useToast();
  const { data: recordings, isLoading } = useQuery<Recording[]>({
    queryKey: ["/api/recordings"],
  });

  const deleteRecordingMutation = useMutation({
    mutationFn: async (id: number) => {
      const response = await fetch(`/api/recordings/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete recording");
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/recordings"] });
      toast({
        title: "녹음이 삭제되었습니다",
        description: "선택한 녹음 파일이 성공적으로 삭제되었습니다.",
      });
    },
    onError: () => {
      toast({
        title: "삭제 실패",
        description: "녹음 삭제 중 오류가 발생했습니다.",
        variant: "destructive",
      });
    },
  });

  const handleDeleteRecording = (id: number) => {
    if (confirm("이 녹음을 삭제하시겠습니까? 이 작업은 취소할 수 없습니다.")) {
      deleteRecordingMutation.mutate(id);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Mic className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-slate-900">음성녹음 서비스</h1>
            </div>
            <Button 
              onClick={() => window.open('/download', '_blank')} 
              variant="outline" 
              size="sm"
              className="flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              프로젝트 다운로드
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <RecordingInterface />
        
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
              <History className="w-5 h-5" />
              최근 녹음
            </h2>
            <Link href="/recordings">
              <Button variant="outline" size="sm">
                전체 보기
              </Button>
            </Link>
          </div>

          {isLoading ? (
            <div className="grid gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-lg border border-slate-200 p-4 animate-pulse">
                  <div className="h-4 bg-slate-200 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-slate-200 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          ) : recordings && recordings.length > 0 ? (
            <div className="grid gap-4">
              {recordings.slice(0, 5).map((recording) => (
                <Link key={recording.id} href={`/recordings/${recording.id}`}>
                  <div className="bg-white rounded-lg border border-slate-200 p-4 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="font-medium text-slate-900 mb-1">{recording.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-slate-500">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {recording.duration ? `${Math.floor(recording.duration / 60)}:${(recording.duration % 60).toString().padStart(2, '0')}` : '처리 중'}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            recording.status === 'completed' ? 'bg-green-100 text-green-700' :
                            recording.status === 'processing' ? 'bg-blue-100 text-blue-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {recording.status === 'completed' ? '완료' :
                             recording.status === 'processing' ? '처리 중' : '실패'}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleDeleteRecording(recording.id);
                          }}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          disabled={deleteRecordingMutation.isPending}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Mic className="w-12 h-12 text-slate-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-slate-900 mb-2">아직 녹음이 없습니다</h3>
              <p className="text-slate-500">첫 번째 녹음을 시작해보세요!</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
