# surfer - Canvas API

<img src="https://user-images.githubusercontent.com/71423455/199903776-dd40ae42-388b-46e9-852d-04893184ed83.gif" width="100%"/>

* Canvas API를 사용해서 2D 컨텍스트를 설정
* 베지어 곡선을 이용해 파도를 생성하고 점을 이어 서퍼 이미지 생성

> 파도

<img src="https://user-images.githubusercontent.com/71423455/199905189-953167fb-448d-44c4-a1d8-04edf3686e17.gif" width="100%" height="300"/>

* 기본 파도의 설정 이후 파도의 애니메이션 범위를 지정 후 애니메이션 효과를 적용
* 화면 크기에 따라 파고가 변화 함

<p style="display:flex;">
  <img width="330" height="400" src="https://user-images.githubusercontent.com/71423455/199906089-e6d27bcf-5a77-41d7-a0b1-76e849092229.png" alt="파도 기본 설정">
  <img width="330" height="400" src="https://user-images.githubusercontent.com/71423455/199906100-aa2028c6-d1ea-4fbd-966d-b863e97bd4bd.png" alt="파고 범위" >
  <img width="330" height="400" src="https://user-images.githubusercontent.com/71423455/199906111-2bf57f15-5cbf-45eb-9172-4e28cf83139f.png" alt="애니메이션 적용">
<p>

> 서퍼

* 화면에 서퍼 이미지가 불러왔는지 여부를 체크해서 화면에 서퍼를 랜덤한 주기로 생성했다.
* 서퍼가 화면 밖으로 나가면 배열에서 반환하여 메모리 관리적인 측면도 고려했다.

<p style="display:flex;">
  <img width="500" height="400" alt="surferController01" src="https://user-images.githubusercontent.com/71423455/199909684-1df48549-177e-46a4-904e-a0e29db5859f.png">
  <img width="500" height="400" alt="surferController02" src="https://user-images.githubusercontent.com/71423455/199909697-b62509b9-bd14-43c6-b9a1-c81cf4021436.png">
</p>

> 추가 설정
* 레티나 디스플레이를 위한 추가 설정
* animate func에 파도와 서퍼 컨트롤러 파일을 import하고 리페인트 전에 애니메이션을 업데이트하는 requestAnimationFrame 함수를 호출 

<p style="display:flex;">
  <img width="333" height="400" src="https://user-images.githubusercontent.com/71423455/199910888-34be3c1c-1711-4e80-b398-3f389f8232bd.png" alt="파고, 서퍼 콘트롤러 파일 추가" >
  <img width="333" height="400" src="https://user-images.githubusercontent.com/71423455/199910894-60f0365e-0c44-41f7-81a2-ca37af9b900d.png" alt="레티나 디스플레이 설정">
  <img width="333" height="400" src="https://user-images.githubusercontent.com/71423455/199910897-66f396e4-9797-4f50-aaf1-c2287dc87a76.png" alt="requestAnimationFrame 함수 호출">
</p>

> 참고한 사이트
- 캔버스 API → https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API 
- 파고와 삼각함수의 연관성 → https://m.blog.naver.com/kordipr/221385458185
- 다음 리페인트를 위한 애니메이션을 업데이트 → https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
- 베지어 곡선 → https://developer.mozilla.org/en-US/docs/Glossary/Bezier_curve
- 베지어 곡선을 이용한 파도 구현 ( quadratic Bézier curve ) → https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/quadraticCurveTo
