import React from "react";

class Input extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            title:'',
            body:'',
            limit:50,
        };
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }
    
    onTitleChangeEventHandler(event){
        const value = event.target.value;
        if(value.length <= this.state.limit) {
            this.setState({
                title: value,
            });
        }
    }
    
    onBodyChangeEventHandler(event){
        this.setState({
            body: event.target.value,
        });
    }
    
    onSubmitEventHandler(event){
        event.preventDefault();
        if(this.state.title.trim() && this.state.body.trim()) {
            this.props.addNotes(this.state);
            this.setState({
                title: '',
                body: ''
            });
            
            // Toast notification instead of alert
            this.showToast(`Catatan "${this.state.title}" berhasil ditambahkan!`);
        }
    }
    
    showToast(message) {
        // Create toast element
        const toast = document.createElement('div');
        toast.textContent = message;
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #10b981, #059669);
            color: white;
            padding: 16px 24px;
            border-radius: 12px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            font-family: 'Inter', sans-serif;
            font-weight: 500;
            max-width: 300px;
            opacity: 0;
            transform: translateX(100%);
            transition: all 0.3s ease;
        `;
        
        document.body.appendChild(toast);
        
        // Animate in
        setTimeout(() => {
            toast.style.opacity = '1';
            toast.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, 3000);
    }
    
    render(){
        const remainingChars = this.state.limit - this.state.title.length;
        const isNearLimit = remainingChars <= 10;
        
        return(
            <div>
                <form className="input" onSubmit={this.onSubmitEventHandler}>
                    <h2>✏️ Buat Catatan Baru</h2>
                    <p className={`input_title_limit ${isNearLimit ? 'text-warning' : ''}`}>
                        Sisa karakter: {remainingChars}
                    </p>
                    <input 
                        type="text" 
                        id="title" 
                        placeholder="Judul catatan..."
                        required 
                        value={this.state.title} 
                        onChange={this.onTitleChangeEventHandler}
                        maxLength={this.state.limit}
                    />
                    <textarea 
                        id="body" 
                        placeholder="Tulis catatan Anda di sini..." 
                        required 
                        value={this.state.body} 
                        onChange={this.onBodyChangeEventHandler}
                        rows="5"
                    />
                    <button type="submit" id="submit">
                        ➕ Tambah Catatan
                    </button>
                </form>
            </div>
        )
    }
}

export default Input;