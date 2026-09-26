import { useApiMutation } from '../../hooks/use-api-mutation.hook';
import { useApiQuery } from '../../hooks/use-api-query.hook';
import { ApiMethods, CacheKeys } from '../../utils/constants';
import { ApiResponseType } from '../api-response.type';
import { ContentType, ViewingHistoryStatType } from './types/content.type';
import { ProgrammeType } from './types/programme.type';
import { QuizType } from './types/quiz.type';

export function useGetProgrammes(category?: string) {
  return useApiQuery<ApiResponseType<ProgrammeType[]>>(
    [CacheKeys.PROGRAMMES, CacheKeys.PROGRAMMES + category],
    `/programmes/list?category=${category}`,
    {
      onSuccess: () => {},
    },
    !!category,
  );
}

export function useGetContent(programmeId?: string) {
  return useApiQuery<ApiResponseType<ContentType[]>>(
    [CacheKeys.CONTENT, CacheKeys.CONTENT + programmeId],
    `/content/list?programmeId=${programmeId}`,
    {
      onSuccess: () => {},
    },
    !!programmeId,
  );
}

export function useGetProgrammeById(programmeId?: string) {
  return useApiQuery<ApiResponseType<ProgrammeType>>(
    [`${CacheKeys.PROGRAMME}:${programmeId}`],
    `/programmes/${programmeId}`,
    {
      onSuccess: () => {},
    },
    !!programmeId,
  );
}

export function useGetContentById(contentId?: string) {
  return useApiQuery<ApiResponseType<ContentType>>(
    [`${CacheKeys.CONTENT}:${contentId}`],
    `/content/${contentId}`,
    {
      onSuccess: () => {},
    },
    !!contentId,
  );
}

export function useGetNextContent(contentId?: string) {
  return useApiQuery<ApiResponseType<ContentType[]>>(
    [`${CacheKeys.NEXT_CONTENT}:${contentId}`],
    `/content/next/${contentId}`,
    {
      onSuccess: () => {},
    },
    !!contentId,
  );
}

export function useSaveQuizAttempt(onComplete: () => void) {
  return useApiMutation<
    { score: number; quizId: string },
    ApiResponseType<undefined>
  >('/quiz_attempts', ApiMethods.POST, [CacheKeys.CONTENT], {
    onSuccess: () => onComplete(),
  });
}

export function useSaveViewingHistory() {
  return useApiMutation<
    { contentId: string; percentageWatched: number },
    ApiResponseType<undefined>
  >('/viewing_history', ApiMethods.POST, [CacheKeys.VIEWING_HISTORY], {
    onSuccess: () => {},
  });
}

export function useGetViewingHistoryStats() {
  return useApiQuery<ApiResponseType<ViewingHistoryStatType[]>>(
    [CacheKeys.VIEWING_HISTORY],
    `/viewing_history/stats`,
    {
      onSuccess: () => {},
    },
  );
}

export function useGetCriticalThinkingQuiz() {
  return useApiQuery<ApiResponseType<QuizType>>(
    [`${CacheKeys.CRITICAL_THINKING_QUIZ}`],
    `/quiz/critical_thinking`,
    {
      onSuccess: () => {},
    },
  );
}

export function useGetQuiz(id: string) {
  return useApiQuery<ApiResponseType<QuizType>>(
    [CacheKeys.QUIZ, `${CacheKeys.QUIZ}:${id}`],
    `/quiz/${id}`,
    {
      onSuccess: () => {},
    },
    !!id,
  );
}

export function useCreateQuizAttempt(onComplete: () => void) {
  return useApiMutation<
    {
      quizId: string;
      score: number;
      answers: { question: string; answer: string }[];
    },
    ApiResponseType<undefined>
  >('/quiz_attempts', ApiMethods.POST, [CacheKeys.QUIZ_ATTEMPTS], {
    onSuccess: () => onComplete(),
  });
}
